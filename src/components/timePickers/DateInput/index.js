import React from 'react';
import './index.css';
import moment from 'moment';
import { TextInput, FloatingTextInput, Modal } from '../../../index';

class DateInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open || false,
            selectedDate: this.props.value || new Date()
        };
        this.toggleModal = this.toggleModal.bind(this);
    };

    toggleModal() {
        this.setState({ open: !this.state.open });
    };


    render() {
        return ([
            <TextInput
                placeholder={this.props.placeholder || 'Enter Date'}
                style={{ textAlign: 'center' }}
                value={this.props.value || moment(new Date()).format('MM-DD-YYYY')}
                onClick={this.toggleModal}
                key={2}
            />,
            <Modal 
                key={1}
                open={this.state.open}
                closeOnClickOutside={this.toggleModal}
            >
                <div className='dateInput-header-container' style={{ background: this.props.headerColor || '#00BCD2' }}>
                    <div className='dateInput-header-year'>{this.state.selectedDate.getFullYear()}</div>
                    <div className='dateInput-header-date'>{moment(this.state.selectedDate).format('ddd, MMMM YY')}</div>
                </div>
            </Modal>
        ]);
    };
};

export default DateInput;
