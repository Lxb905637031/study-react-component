import './index.scss'

function Buttons({
    untransferData,
    transferedData,
    toTransfered,
    toUntransfer
}) {

    const isDisabled = (data) => {
        return data.some(d => d.value === true)
    }

    function handleTransfer(dir) {
        if (dir === 'right' && !isDisabled(untransferData)) return
        if (dir === 'left' && !isDisabled(transferedData)) return

        dir === 'right' && toTransfered()
        dir === 'left' && toUntransfer()
    }

    return (
        <div className="button-group">
            <span 
                className={ isDisabled(transferedData) ? 'icon' : 'icon disabled'}
                onClick={ () => handleTransfer('left') }
            >
                ←
            </span>
            <span 
                className={ isDisabled(untransferData) ? 'icon' : 'icon disabled'}
                onClick={ () => handleTransfer('right') }
            >
                →
            </span>
        </div>
    )
}

export default Buttons
