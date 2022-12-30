import { useRef } from 'react'
import { useMove } from './hook'

import './style/index.scss'

/** 
 * disabled  禁用 (true / false)
 * defaultValue 默认值 (0 - 100) 填充占比
 * orientation 横向 transversal  纵向 vertical
 */

function Slider({
  disabled,
  defaultValue,
  orientation = 'transversal'
}) {
  
  const sliderRef = useRef()

  const [
    percent,
    left
  ] = useMove(sliderRef, disabled, defaultValue, orientation)
  
  return (
    <div 
      className="slider" 
      ref={ sliderRef }
      style={{
        transform: orientation === 'vertical' ? 'rotate(90deg)' : 'rotate(0deg)',
        transformOrigin: 'left'
      }}
    >
      <div 
        className="process"
        style={{
          width: percent + '%'
        }}
      />
      <span 
        className="point"
        style={{
          left: left + 'px'
        }}
      />
    </div>
  )
}

export default Slider
