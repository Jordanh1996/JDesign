import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unmountAnimation: false
        };
        this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
    };

    componentDidUpdate(prevProps) {
        if (this.props.open && !prevProps.open) {
            this.setState({ unmountAnimation: true });
        };
    };

    closeOnClickOutside(e) {
        if (e.target.getAttribute('name') === 'overlay') {
            this.props.closeOnClickOutside();
        }
    };


    render() {
        if (this.props.open) {

            return (
                <div 
                    className={`modal-overlay ${this.props.overlayClassName}`} 
                    style={this.props.overlayStyle} 
                    onClick={this.props.closeOnClickOutside && this.closeOnClickOutside} 
                    name='overlay'
                    ref={this.props.ref}
                >
                    <div className={`modal ${this.props.className}`} style={Object.assign({ background: this.props.theme.secondary, color: this.props.theme.third }, this.props.style)}>
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
                    <div className={`modal modal_closing ${this.props.className}`} style={Object.assign({ background: this.props.theme.secondary, color: this.props.theme.third }, this.props.style)}>
                        {this.props.children}
                    </div>
                </div>
            );
        }
        return null;
    };
};

export default withTheme(Modal);