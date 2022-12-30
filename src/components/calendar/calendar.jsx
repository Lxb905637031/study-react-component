import './style/index.scss'

import { useDate } from './hooks/index'

function Calendar() {

    const [
        year,
        month,
        dates,
        {state, date},
        handleActive,
        toToday,
        changeMonth
    ] = useDate()

    function _className(r, state, date) {
        return  ((year === new Date().getFullYear()) &&
            (month === new Date().getMonth() + 1) && 
            (r.state === state) && 
            (r.date === date)) ?
            r.state + ' active' : r.state
    }

    return (
        <div className="calender">
            <div className="calender-header">
                <div className="current-time">{ year }年{ month }月</div>
                <div className="btns">
                    <span 
                        className="btn prev-month"
                        onClick={() => changeMonth('prev')}
                    >
                        上个月
                    </span>
                    <span
                        className="btn today"
                        onClick={ () => toToday() }
                    >
                        今天
                    </span>
                    <span 
                        className="btn next-month"
                        onClick={() => changeMonth('next')}
                    >
                        下个月
                    </span>
                </div>
            </div>
            <div className="calender-body">
                <table cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                            <th>日</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dates && dates.map((row, index) => {
                                return (
                                    <tr key={ index }>
                                        {
                                            row && row.map((r, i) => {
                                                return (
                                                    <td 
                                                        key={ r.date + i }
                                                        onClick={() => handleActive(r)}
                                                    >
                                                        <span 
                                                            className={ _className(r, state, date) }
                                                        >
                                                            { r.date }
                                                        </span>
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calendar
