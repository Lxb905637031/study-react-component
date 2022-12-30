import { useEffect, useState } from 'react'

function useDate() {
    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth() + 1)
    const [dates, setDates] = useState([])
    const [active, setActive] = useState({
        state: 'cur',
        date: new Date().getDate()
    })

    useEffect(() => {
        initDates()
    }, [year, month])

    function initDates() {
        setDates(() => {
            const dateArr = [
                ...getLastMonthLastDays(year, month),
                ...getCurrentMonthDays(year, month),
                ...getNextMonthBeginDays(year, month)
            ]

            return spliceArr(dateArr, 7)
        })
    }

    function handleActive({
        state,
        date
    }) {
        setActive(() => {
            return {
                state,
                date
            }
        })
    }

    function toToday() {
        setYear(new Date().getFullYear())
        setMonth(new Date().getMonth() + 1)
        setActive({
            state: 'cur',
            date: new Date().getDate()
        })
    }

    function changeMonth(type) {
        switch(type) {
            case 'prev':
                setMonth((month) => {
                    if (month - 1 < 1) {
                        setYear(year - 1)
                        return 12
                    }
                    return month - 1
                    
                })
                break
            case 'next':
                setMonth((month) => {
                    if (month + 1 > 12) {
                        setYear(year + 1)
                        return 1
                    }
                    return month + 1
                })
                break
            default:
                break
        }

    }

    return [
        year,
        month,
        dates,
        active,
        handleActive,
        toToday,
        changeMonth
    ]
}

// 获取当月日期
function getCurrentMonthDays(y, m) {
    const days =  new Date(y, m, 0).getDate()

    return new Array(days).fill(0).map((item, index) => {
        return {
            date: item + index + 1,
            state: 'cur'
        }
    })
}


// 获取上个月最后最后那几天
function getLastMonthLastDays(y, m) {
    let surPlus = new Date(y, m - 1, 0).getDay()
    
    const days = []

    while(surPlus > 0) {
        surPlus--
        days.push({
            date: new Date(y, m - 1, 0).getDate() - surPlus,
            state: 'prev'
        })
    }

    return days
}

// 下个月开头那几天
function getNextMonthBeginDays(y, m) {
    const curMonthDays = getCurrentMonthDays(y, m)
    const lastMonthLastDays = getLastMonthLastDays(y, m)
    const next = 6 * 7 - curMonthDays.length - lastMonthLastDays.length

    return new Array(next).fill(0).map((item, index) => {
        return {
            date: item + index + 1,
            state: 'next'
        }
    })
}

function spliceArr(arr, num) {
    const result = []
    while(arr.length) {
        result.push(arr.splice(0, num))
    }

    return result
}

export {
    useDate
}
