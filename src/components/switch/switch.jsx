import { useState } from 'react'
import './style/index.scss'

/**
 * disabled 是否禁用
 * checked 选中状态
 * toggleChecked 切换选中状态
 */

function Switch({
    checked,
    disabled = false,
    toggleChecked
}) {

    const changeChecked = () => toggleChecked()
    
    return (
        <div 
            className={ checked ? "switch active" : 'switch' }
            style={{
                cursor: disabled ? 'not-allowed' : 'point'
            }}
        >
            <input
                className="switch_input"
                type="checkbox"
                disabled={ disabled }
                onChange={ () => changeChecked() }
            />
            <span 
                className={ checked ? "circle active" : 'circle' }
            />
        </div>
    )

}

export default Switch
