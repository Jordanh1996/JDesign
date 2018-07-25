import React from 'react';
import './index.css';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unmountAnimation: false
        };
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.open) this.setState({ unmountAnimation: true });
    }

    render() {
        if (this.props.open) {

            return (
                <div className={`modal-overlay ${this.props.overlayClassName}`} style={this.props.overlayStyle}>
                    <div className={`modal ${this.props.className}`} style={this.props.style}>
                        {this.props.children}
                    </div>
                </div>
            );
        }
        if (!this.props.open && this.state.unmountAnimation) {
            setTimeout(() => {
                this.setState({ unmountAnimation: false });
            }, 250);
            return (
                <div className={`modal-overlay modal-overlay_closing ${this.props.overlayClassName}`} style={this.props.overlayStyle}>
                    <div className={`modal modal_closing ${this.props.className}`} style={this.props.style}>
                        {this.props.children}
                    </div>
                </div>
            );
        }
        return null
    };
};

export default Modal;