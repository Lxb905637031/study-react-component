/**
 *  active 控制展开面板列表项, 数据类型为数组或字符串
 *  accordion 手风琴模式, 数据类型为boolean ,active为字符串
 *  data 列表项，数据格式[{ title: 'xxx', name: 'xxx', content: 'xxx' disabled: true }, { title: 'xxx', name: 'xxx', content: 'xxx', disabled: false }]
 */
import CollapseItem from './components/collapseItem'

import './style/index.scss'

import { useState } from 'react'

function Collapse({
    active,
    accordion,
    data
}) {
    const [cur, setCur] = useState(active)

    return (
        <div className="collapse">
            {
                data && data.map((item, index) => {
                    const { title, name, content, disabled } = item
                    return (
                        <CollapseItem
                            key={ index }
                            title={ title }
                            name={ name }
                            content={ content }
                            disabled={ disabled }
                            active={ active }
                            accordion= { accordion }
                            cur={ cur }
                            setCur={ setCur }
                        />
                    )
                })
            }
        </div>
    )
}

export default Collapse
