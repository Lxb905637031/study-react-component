import { useState, useEffect } from 'react'

function useMove(ref, disabled, defaultValue, orientation) {
    const [percent, setPercent] = useState(0)
    const [left, setLeft] = useState(0)

    // 开关
    let flag = false
    // dom
    let _distance = 0
    let _refWidth = 0

    useEffect(() => {
        const point = ref.current.getElementsByClassName('point')[0]
    
        _distance = orientation === 'vertical' ? 
            ref.current.offsetTop : 
            ref.current.offsetLeft

        _refWidth = ref.current.clientWidth

        init(point, orientation)

    }, [left, percent])

    const init = (point, orientation) => {
        initDefaultValue(point, defaultValue)
        initDisabled(point, orientation)
    }

    // 是否禁用
    function initDisabled(point, orientation) {
        if (disabled === 'undefined') {
            ref.current.classList.add('disabled')
            point.classList.add('disabled')
            eventBind(point, orientation)
        }

        if (disabled && typeof disabled !== 'boolean') {
            console.warn('Type of the disabled must be Boolean')
            return
        }

        if (disabled && typeof disabled === 'boolean') {
            ref.current.classList.add('disabled')
            point.classList.add('disabled')
        } else {
            eventBind(point, orientation)
        }
    }

    // 默认值
    function initDefaultValue(point, defaultValue) {
        if (!defaultValue) return
        if (typeof defaultValue !== 'number' && typeof defaultValue !== 'string') {
            console.warn('Type of the disabled must be Number or String')
            return
        }
        if (Number(defaultValue) < 0 || Number(defaultValue) > 100) {
            console.warn('The defaultValue must between 0 and 100')
            return
        }
        setLeft(() => {
            return ((defaultValue * _refWidth) / 100) - point.clientWidth / 2
        })
        setPercent(() => {
            return defaultValue
        })
    }

    function eventBind(el, orientation) {
        el.addEventListener('mousedown', (e) => mouseUpDown(e, 'down'), false)
        el.addEventListener('mousemove', (e) => mouseMove(e, orientation), false)
        el.addEventListener('mouseup', (e) => mouseUpDown(e, 'up'), false)
    }

    function mouseUpDown(e, type) {
        e.stopPropagation()
        flag = type === 'down' ? true : false
    }

    function mouseMove(e, orientation) {
        e.stopPropagation()
        let rang = orientation === 'vertical' ? e.clientY : e.clientX
        
        if (!flag) return
        setLeft(() => {
            let left = rang - _distance - e.target.clientWidth / 2
            const max = ref.current.clientWidth - e.target.clientWidth
            const min = 0
            if (left > max || left < min) return

            return left
        })
        setPercent(() => {
            let distance = rang - _distance
            const max = ref.current.clientWidth - e.target.clientWidth
            const min = 0
            if (distance < min) return
            if (distance > max) return 100

            return (distance / ref.current.clientWidth) * 100
        })
        
    }

    return [
        percent,
        left
    ]
}

export {
    useMove
}