import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';
import moment from 'moment';
import { TextInput, FloatingTextInput, Modal } from '../../../index';

const daysArray = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

class DateInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open || false,
            dateValue: this.props.value,
            selectedDate: this.props.value,
            viewedMonth: this.props.value
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.renderViewedMonth = this.renderViewedMonth.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
    };

    toggleModal() {
        this.setState({ open: !this.state.open, viewedMonth: this.state.selectedDate });
    };

    renderViewedMonth() {
        const monthSize = moment(this.state.viewedMonth).daysInMonth();
        const firstDay = moment(this.state.viewedMonth).date(0)._d.getDay();
        const viewedMonth = [];
        for (let w = 0; w < 6; w++) {
            const week = [];
            for (let i = 1; i < 8; i++) {
                const day = w * 7 + i;
                const dayNum = w * 7 + i - firstDay + 1;
                week.push((day < firstDay || day >= monthSize + firstDay) ?
                    <div className='dateInput-viewedMonth-day' key={i}></div> :
                    <div 
                        className='dateInput-viewedMonth-day'
                        key={i}
                    >
                        <div 
                            className='dateInput-viewedMonth-day_hover'
                            style={{
                                backgroundColor: this.props.theme.primary
                            }}
                        />
                        {dayNum}
                    </div>
                )
            }
            viewedMonth.push(
                <div className='dateInput-viewedMonth-day-row' key={w}>
                    {
                        week
                    }
                </div>
            )
        }
        if (moment(this.state.selectedDate).isSame(this.state.viewedMonth, 'month')) {
            const day = moment(this.state.selectedDate).date() + firstDay;
            console.log(viewedMonth[day / 7].props.children[day % 7])
            viewedMonth[day / 7].props.children[day % 7].props.children[0].props.className = 'dateInput-viewedMonth-day_selected';

        }
        return viewedMonth;
    };

    changeMonth(isForward) {
        if (isForward) {
            return this.setState({ viewedMonth: moment(this.state.viewedMonth).add(1, 'months') });
        }
        return this.setState({ viewedMonth: moment(this.state.viewedMonth).subtract(1, 'months') });
    };

    render() {
        return ([
            <TextInput
                placeholder={this.props.placeholder || 'Enter Date'}
                style={{ textAlign: 'center' }}
                value={moment(this.props.value).format('MM-DD-YYYY')}
                onClick={this.toggleModal}
                key={2}
                readOnly
            />,
            <Modal
                key={1}
                open={this.state.open}
                closeOnClickOutside={this.props.closeOnClickOutside && this.toggleModal}
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
                <div className='dateInput-header-container' style={{ background: this.props.headerColor || this.props.theme.primary, color: this.props.theme.secondary }}>
                    <div className='dateInput-header-year'>{this.state.selectedDate.format('YYYY')}</div>
                    <div className='dateInput-header-date'>{moment(this.state.selectedDate).format('ddd, MMM YY')}</div>
                </div>
                <div className='dateInput-viewedMonth-container'>
                    <svg viewBox="0 0 451.847 451.847" style={{ height: '16px', width: '16px' }} className='dateInput-viewedMonth-arrow' onClick={() => this.changeMonth(false)}>
                        <g>
                            <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
                                c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
                                c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"/>
                        </g>
                    </svg>
                    <div>
                        {
                            moment(this.state.viewedMonth).format('MMMM')
                        }
                        {' '}
                        {
                            this.state.viewedMonth.format('YYYY')
                        }
                    </div>
                    <svg viewBox="0 0 451.847 451.847" style={{ height: '16px', width: '16px', transform: 'rotateZ(180deg)' }} className='dateInput-viewedMonth-arrow' onClick={() => this.changeMonth(true)}>
                        <g>
                            <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
                                c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
                                c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"/>
                        </g>
                    </svg>
                </div>
                <div className='dateInput-viewedMonth-day-container'>
                    <div className='dateInput-viewedMonth-day-row'>
                    {
                        daysArray.map((day) => <div className='dateInput-viewedMonth-day' style={{ color: '#A6A6A6' }}>{day}</div>)
                    }
                    </div>
                    {
                        this.renderViewedMonth()
                    }
                </div>
            </Modal>
        ]);
    };
};

DateInput.defaultProps = {
    value: moment()
};

export default withTheme(DateInput);
