import Untransfer from './components/untransfer'
import Transfered from './components/transfered'
import Buttons from './components/buttons'

import './style/index.scss'

import {
    useUntransfer,
    useTransfered
} from './hooks'

/**
 *  data为左侧未被转移的数据，[{label: '选项一', disabled: false}, {label: '选项二', disabled: true}]
 */
function Transfer({
    data
}) {
    const [
        untransferData, 
        toggleUntransfer, 
        toTransfered, 
        fillUntransferData
    ] = useUntransfer(data)
    
    const [
        transferedData,
        toggleTransfered,
        toUntransfer
    ] = useTransfered(data, untransferData)

    function _toUntransfer() {
        toUntransfer()
        const toUntransferData = transferedData.filter(item => item.value)
        fillUntransferData(toUntransferData)
    }

    return (
        <div className="transfer">
            <Untransfer
                untransferData={untransferData}
                toggleUntransfer={toggleUntransfer}
            />
            <Buttons
                untransferData={untransferData}
                transferedData={transferedData}
                toTransfered={toTransfered}
                toUntransfer={_toUntransfer}
            />
            <Transfered
                transferedData={transferedData}
                toggleTransfered={toggleTransfered}
            />
        </div>
    )
}

export default Transfer
