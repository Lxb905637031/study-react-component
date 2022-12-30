import './index.scss'

import { useFold } from './hooks'

function CollapseItem({
    title,
    name,
    content,
    disabled,
    active,
    accordion,
    cur,
    setCur
}) {

    const [
        isFold,
        isAccordion,
        handleExpend
    ] = useFold(active, name, disabled, accordion, cur, setCur)


    return (
        <div className="collapse-item">
            <div 
                className={ disabled ? 'cell disabled' : 'cell' }
                onClick={() => handleExpend() }
            >
                <div className="title">{ title }</div>
                {
                    !isAccordion ?
                        <span className={ isFold ? 'triangle up' : 'triangle down' } /> :
                        (
                            cur === name ?
                                (<span className={ isFold  ? 'triangle up' : 'triangle down' } />) :
                                (<span className="triangle down" />)
                        )
                        // <span className={ cur === name && isFold  ? 'triangle up' : 'triangle down' } />
                }
            </div>
            {
                !isAccordion ?
                (
                    <div className={ isFold ? 'bottom open' : 'bottom close' }>
                        <div className="content">{ content }</div>
                    </div>
                ) :
                (
                    cur === name ? 
                    (
                        <div className={ isFold ?  'bottom open' : 'bottom close' }>
                            <div className="content">{ content }</div>
                        </div>
                    ) :
                    (
                        <div className="bottom close">
                            <div className="content">{ content }</div>
                        </div>
                    )
                    // <div className={ cur === name && isFold ?  'bottom open' : 'bottom close' }>
                    //     <div className="content">{ content }</div>
                    // </div>
                )
            }
        </div>
    )
}

export default CollapseItem
