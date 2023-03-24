import { useMemo } from 'react'

import './style/index.scss'
/** 
 * lightDegree 倾斜角度, 数据类型为字符串
 * lightWidth 扫光的宽度，数据类型为字符串
 * lightBg 扫光的背景，数据类型为字符串
 * duration 扫光动画时间，数据类型为字符串
 */
function Skeleton({
    children,
    lightDegree = '22.5deg',
    lightWidth = '80px',
    lightBg = 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .24) 50.04%, rgba(255, 255, 255, 0) 99.37%)',
    duration = '2s'
}) {

    const sweepLightStyle = useMemo(() => {
        return {
            width: lightWidth,
            background: lightBg,
            transform: `rotate(${lightDegree}) scaleY(2)`
        }
    }, [lightWidth, lightBg, lightDegree])


    return (
        <div className="container">
            { children }
            <div 
                className="mask"
                style={{ animationDuration: duration }}
            >
                <div 
                    className="sweep"
                    style={sweepLightStyle }
                >
                </div>
            </div>
        </div>
    )
}

export default Skeleton
