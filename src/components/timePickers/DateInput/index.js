import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.scss';
import moment from 'moment';
import { TextInput, FloatingTextInput, Modal, Button } from '../../../index';

const daysArray = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

class DateInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open || false,
            dateValue: undefined,
            selectedDate: this.props.value || new Date(),
            viewedMonth: moment(this.props.value || new Date())
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.renderViewedMonth = this.renderViewedMonth.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
    };

    toggleModal() {
        this.setState({ open: !this.state.open, viewedMonth: moment(this.state.selectedDate) });
    };

    renderViewedMonth() {
        const monthSize = moment(this.state.viewedMonth).daysInMonth();
        const firstDay = (moment(this.state.viewedMonth).startOf('month')._d.getDay() + 6) % 7;
        const viewedMonth = [];
        for (let w = 0; w < 6; w++) {
            const week = [];
            for (let i = 1; i < 8; i++) {
                const day = (w * 7) + i;
                const dayNum =(w * 7) + i - firstDay;
                week.push((day <= firstDay || day > monthSize + firstDay) ?
                    <div className='dateInput-viewedMonth-day' key={i}></div> :
                    <div 
                        className='dateInput-viewedMonth-day'
                        onClick={this.pickDate.bind(this, dayNum)}
                        key={i}
                    >
                        <div 
                            className='dateInput-viewedMonth-day_hover'
                            style={{
                                backgroundColor: this.props.theme.primary
                            }}
                        />
                        <div>{dayNum}</div>
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
            const day = moment(this.state.selectedDate).date() + firstDay - 1;
            const el = viewedMonth[Math.floor(day / 7)].props.children[day % 7];
            viewedMonth[Math.floor(day / 7)].props.children[day % 7] = React.cloneElement(el, { ...el.props, style: Object.assign({}, el.props.style, { color: this.props.theme.secondary, fontWeight: 600 }) },
                el.props.children.map((ch, i) => {
                    if (i == 0) {
                        return React.cloneElement(ch, { ...el.props, className: el.props.className + ' dateInput-viewedMonth-day_selected' });
                    }
                    return ch;
                })
            );
        }
        return viewedMonth;
    };

    changeMonth(isForward) {
        if (isForward) {
            return this.setState({ viewedMonth: moment(this.state.viewedMonth).add(1, 'months') });
        }
        return this.setState({ viewedMonth: moment(this.state.viewedMonth).subtract(1, 'months') });
    };

    pickDate = (day) => {
        this.setState({ selectedDate: moment(this.state.viewedMonth).set('date', day).toDate() });
    }

    confirmDate = () => {
        if (this.props.onChange) {
            this.props.onChange(this.state.selectedDate);
        } else {
            this.setState({ dateValue: this.state.selectedDate });
        }
        this.toggleModal();
    }

    render() {
        const selectedDate = moment(this.state.selectedDate);
        const dateText = this.props.value || this.state.dateValue ? moment(this.props.value || this.state.dateValue).format('MM-DD-YYYY') : null
        return (
            <>
                <TextInput
                    placeholder={this.props.placeholder || 'Enter Date'}
                    style={{ textAlign: 'center' }}
                    value={dateText}
                    onClick={this.toggleModal}
                    key={2}
                    readOnly
                />
                <Modal
                    key={1}
                    open={this.state.open}
                    closeOnClickOutside={this.props.closeOnClickOutside && this.toggleModal}
                    style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                    <div className='dateInput-header-container' style={{ background: this.props.headerColor || this.props.theme.primary, color: this.props.theme.secondary }}>
                        <div className='dateInput-header-year'>{selectedDate.format('YYYY')}</div>
                        <div className='dateInput-header-date'>{selectedDate.format('ddd, MMM D')}</div>
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
                                this.state.viewedMonth.format('MMMM')
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
                    <div className='dateInput-actions'>
                        <Button
                            label="Confirm"
                            onClick={this.confirmDate}
                        />
                        <Button
                            label="Cancel"
                            onClick={this.toggleModal}
                        />
                    </div>
                </Modal>
            </>
        );
    };
};

export default withTheme(DateInput);
