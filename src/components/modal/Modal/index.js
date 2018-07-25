import React from 'react';
import './index.css';

class Modal extends React.Component {

    componentWillReceiveProps(prevProp, newProps) {

    };

    render() {
        if (this.props.open) {
            return (
                <div className='modal-overlay'>
                    <div className='modal'>
                        {this.props.children}
                    </div>
                </div>
            );
        }
        return null
    };
};

export default Modal;