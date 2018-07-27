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
            selectedDate: this.props.value,
            viewedMonth: this.props.value
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.renderViewedMonth = this.renderViewedMonth.bind(this);
    };

    toggleModal() {
        this.setState({ open: !this.state.open });
    };

    renderViewedMonth() {
        const monthSize = moment(this.state.viewedMonth).daysInMonth();
        const firstDay = moment(this.state.viewedMonth).date(0)._d.getDay();
        const viewedMonth = [];
        for (let w = 0; w < 7; w++) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                const day = w * 7 + i;
                const dayNum = w * 7 + i - firstDay;
                week.push((day < firstDay || day > monthSize) ?
                    <div className='dateInput-viewedMonth-day'></div> :
                    <div className='dateInput-viewedMonth-day'>{dayNum}</div>
                )
            }
            viewedMonth.push(
                <div className='dateInput-viewedMonth-day-row'>
                    {
                        week
                    }
                </div>
            )
        }
        return viewedMonth;
    };

    render() {
        return ([
            <TextInput
                placeholder={this.props.placeholder || 'Enter Date'}
                style={{ textAlign: 'center' }}
                value={moment(this.props.value).format('MM-DD-YYYY')}
                onClick={this.toggleModal}
                key={2}
            />,
            <Modal
                key={1}
                open={this.state.open}
                closeOnClickOutside={this.props.closeOnClickOutside && this.toggleModal}
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '150px' }}
            >
                <div className='dateInput-header-container' style={{ background: this.props.headerColor || this.props.theme.primary, color: this.props.theme.secondary }}>
                    <div className='dateInput-header-year'>{this.state.selectedDate.getFullYear()}</div>
                    <div className='dateInput-header-date'>{moment(this.state.selectedDate).format('ddd, MMM YY')}</div>
                </div>
                <div className='dateInput-viewedMonth-container'>
                    <div>a
                    </div>
                    <div>
                        {
                            moment(this.state.viewedMonth).format('MMMM')
                        }
                        {' '}
                        {
                            this.state.viewedMonth.getFullYear()
                        }
                    </div>
                    <div>b
                    </div>
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
    value: new Date()
};

export default withTheme(DateInput);
