import './index.scss'

function Untransfer({
    untransferData,
    toggleUntransfer
}) {
    return (
        <div className='untransfer-list'>
            {
                untransferData.length ? untransferData.map((item) => {
                    return (
                        <div
                            key={ item.label }
                            className="untransfer-item"
                        >
                            <input
                                type="checkbox"
                                disabled={ item.disabled }
                                className={ item.disabled ? 'disabled': '' }
                                value={ item.value }
                                name={ item.label }
                                onChange={ (e) => toggleUntransfer(e) }
                            />
                            <label>{ item.label }</label>
                        </div>
                    )
                }) : (
                    <span className="tip">暂无数据</span>
                )
            }
        </div>
    )
}

export default Untransfer
