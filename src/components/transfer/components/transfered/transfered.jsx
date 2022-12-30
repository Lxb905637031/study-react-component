import './index.scss'

function Transfered({
    transferedData,
    toggleTransfered
}) {
    return (
        <div className='transfered-list'>
            {
                transferedData.length ? transferedData.map((item) => {
                    return (
                        <div
                            key={ item.label }
                            className="transfered-item"
                        >
                            <input
                                type="checkbox"
                                disabled={ item.disabled }
                                className={ item.disabled ? 'disabled': '' }
                                value={ item.value }
                                name={ item.label }
                                onChange={ (e) => toggleTransfered(e) }
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

export default Transfered
