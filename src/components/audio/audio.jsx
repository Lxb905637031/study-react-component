import prev from './images/prev.png'
import pause from './images/pause.png'
import play from './images/play.png'
import next from './images/next.png'

import './style/index.scss'

import { useRef } from 'react'

import { useSong } from './hooks/index'
/**
 * songs 为歌曲列表
 */
function Audio({
    songs
}) {
    
    const audioRef = useRef()
    const pointRef = useRef()
    const processRef = useRef()

    const [
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
    ] = useSong(songs, audioRef, pointRef, processRef)
    

    return (
        <div className="audio">
            <div className="song-name">当前歌曲：{ currentSong.name }</div>
            <div className="info-bar">
                <span className="current-time">{ currentTime }</span>
                <div className="process"  ref={ processRef }>
                    <div 
                        className="fill"
                        style={{
                            width: fillWidth + '%'
                        }}
                     />
                    <span 
                        className="point"
                        ref={ pointRef }
                        style={{
                            left: pointLeft + '%'
                        }}
                    />
                </div>
                <span className="all-time">{ allTime }</span>
            </div>
            <div className="btns">
                <span onClick={ () => changeSong('prev') }><img src={ prev } alt=""  /></span>
                {
                    isPlay ?
                    (<span onClick={ () => handlePause() }><img src={ pause } alt="" /></span>) :
                    (<span onClick={ () => handlePlay() }><img src={ play } alt="" /></span>)
                }
                <span onClick={ () => changeSong('next') }><img src={ next } alt="" /></span>
            </div>
            <audio
                ref={ audioRef }
                src={ currentSong.songSrc }
                onCanPlay={ () => canPlay() }
            /> 
        </div>
    )
}

export default Audio
