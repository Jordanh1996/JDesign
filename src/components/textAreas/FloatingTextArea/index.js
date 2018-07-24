import React from 'react';
import './index.css';

class FloatingTextArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: this.props.autoFocus || false,
            content: this.props.value
        };
    };

    render() {
        return (
            <div {...this.props} className={`floatingTextArea-container ${this.props.className}`}>
                <div 
                    className={`floatingTextArea-label 
                    ${this.props.error && 'floatingTextArea-label_error'} 
                    ${this.state.focused || this.state.content ? `${this.props.floatingLabelClassName} floatingTextArea-label_focused` : this.props.placeholderClassName}`} 
                    style={this.state.focused ? this.props.floatingLabelStyle : this.props.placeholderStyle}
                >
                    {this.props.placeholder}
                </div>
                <textarea
                    type={this.props.type}
                    className={`floatingTextArea floatingTextArea ${this.props.inputClassName} ${this.props.error && 'floatingTextArea_error'}`}
                    style={this.props.inputStyle}
                    onFocus={!this.props.disabled ? () => this.setState({ focused: true }) : undefined}
                    onBlur={(input) => this.setState({ focused: false, content: input.target.value })}
                    autoFocus={this.state.focused}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    rows={this.props.rows}
                    disabled={this.props.disabled}
                />
                <div 
                    className={`floatingTextArea-border ${this.props.underlineClassName}`} 
                    style={Object.assign({}, this.props.underlineStyle, { borderBottomColor: this.props.underlineColor })} 
                />
                <div className='floatingTextArea-error'>{this.props.error && this.props.errorMessage}</div>
            </div>
        );
    };
};

export default FloatingTextArea;
