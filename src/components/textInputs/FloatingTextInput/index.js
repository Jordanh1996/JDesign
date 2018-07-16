import React from 'react';
import './index.css'

class FloatingTextInput extends React.Component {

    render() {
        return (
            <div {...this.props} className={`floatingTextInput-container ${this.props.className}`}>
                <p className={`floatingTextInput-label ${this.props.labelClassName}`}>
                    {this.props.placeholder}
                </p>
                <input
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    className={`floatingTextInput ${this.props.inputClassName}`}
                    style={this.props.inputStyle}
                />
                <div className='floatingTextInput-border' />
            </div>
        );
    };
};

export default FloatingTextInput;
