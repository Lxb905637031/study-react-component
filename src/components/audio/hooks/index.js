import { useState, useEffect } from 'react'

// 定时器
let timer = null

function useSong(songs, audioRef, pointRef, processRef) {
    // 进度条填充宽度
    const [fillWidth, setFillWidth] = useState(0)
    // 小圆点位置
    const [pointLeft, setPointLeft] = useState(0)
    // 当前播放的索引
    const [currentIndex, setCurrentIndex] = useState(0)
    // 当前歌曲
    const [currentSong, setCurrentSong] = useState(songs[currentIndex])
    // 是否播放
    const [isPlay, setIsPlay] = useState(false)
    // 当前播放时长
    const [currentTime, setCurrentTime] = useState(null)
    // 总时长
    const [allTime, setAllTime] = useState(null)

    useEffect(() => {
        init()
    }, [currentIndex])
    
    function init() {
        eventBind()
        canPlay()
    }

    function eventBind() {
        const oProcess = processRef.current  
        oProcess.addEventListener('click', clickProcess, false)
    }

    function clickProcess(e) {
        e.stopPropagation()
        const process = processRef.current
        const audio = audioRef.current
        const allTime = audio.duration
        const clientX = e.clientX
        const leftX = process.getBoundingClientRect().left
        const width = process.offsetWidth
        const dis =  clientX - leftX
        const percent = dis / width

        setFillWidth(() => {
            return percent.toFixed(2) * 100
        })

        setPointLeft(() => {
            return percent.toFixed(2) * 100
        })

        setCurrentTime(formatTime(~~(percent * allTime)))
        audio.currentTime = ~~(percent * allTime)

        handlePlay()
    }

    function canPlay() {
        const audio = audioRef.current
        const duration = audio.duration
        const currentTime = audio.currentTime

        setAllTime(formatTime(~~(duration)))
        setCurrentTime(formatTime(~~(currentTime)))
    }

    function handlePause() {
        const audio = audioRef.current
        if (timer) {
            clearInterval(timer)
            timer = null
        }
        audio.pause()
        setIsPlay(false)
    }

    function handlePlay() {
        const audio = audioRef.current
        setIsPlay(true)
        audio.play()
        timer = setInterval(() => {
            const { currentTime, duration } = audio
            setCurrentTime(formatTime(~~(currentTime)))
            setFillWidth(() => {
                const rate = (((~~currentTime) / (~~duration) * 100).toFixed(2))
                return rate >= 100 ? 0 : rate
            })
            setPointLeft(() => {
                const rate = (((~~currentTime) / (~~duration) * 100).toFixed(2))
                return rate >= 100 ? 0 : rate
            })
            if (currentTime === duration) {
                clearInterval(timer)
                timer = null
                setIsPlay(false)
                setCurrentTime(formatTime(0))
            }
        }, 1000)
    }

    function changeSong(type) {
        const last = songs.length - 1
        switch (type) {
            case 'prev':
                setCurrentIndex((index) => {
                    const i = index - 1 < 0 ? last : index - 1
                    setCurrentSong(songs[i])
                    return i
                })
                break
            case 'next':
                setCurrentIndex((index) => {
                    const i = index + 1 > last ? 0 : index + 1
                    setCurrentSong(songs[i])
                    return i
                })
                break
            default:
                break
        }
        setIsPlay(false)
        canPlay()
    }

    return [
        currentSong,
        fillWidth,
        pointLeft,
        isPlay,
        handlePause,
        handlePlay,
        currentTime,
        allTime,
        canPlay,
        changeSong
    ]
}

function formatTime(time) {
    let min = time / 60 >= 10 ? (time / 60) : '0' + Math.floor(time / 60)
    let sec = time % 60 >= 10 ? (time % 60) : '0' + time % 60

    return min + ':' + sec
}

export {
    useSong
}