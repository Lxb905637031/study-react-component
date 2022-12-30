import { useEffect, useState } from 'react'

function useFold(active, name, disabled, accordion, cur, setCur) {
    const [isFold, setIsFold] = useState(false)
    // 判断是否为手风琴模式
    const [isAccordion, setIsAccordion] = useState(false)

    useEffect(() => {
        check()
        initFold(active, name)
    }, [])

    function check() {
        if (accordion && typeof accordion !== 'boolean') {
            console.warn('Type of the accordion must be Boolean')
            return
        }

        if (accordion && typeof active !== 'string') {
            console.warn('Type of the active must be String')
            return
        }

        if (!accordion && !Array.isArray(active)) {
            console.warn('Type of the active must be Array')
            return
        }

        if (accordion && typeof active === 'string') {
            setIsAccordion(true)
        }
    }

    function initFold(active, name) {
        setIsFold(() => {
            if (Array.isArray(active) && active.includes(name)) return true
            if (typeof active === 'string' && active === name) return true
            return false
        })
    }

    function handleFold() {
        if (disabled) return
        setIsFold(!isFold)
    }

    function handleExpend() {
        if (isAccordion) {
            handleFold()
            setCur(name)
            cur !== name && setIsFold(true)
        } else {
            handleFold()
        }
    }

    
    return [
        isFold,
        isAccordion,
        handleExpend
    ]
}

export {
    useFold
}