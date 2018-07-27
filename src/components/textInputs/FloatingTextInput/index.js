import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css'

class FloatingTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: this.props.autoFocus || false,
            content: this.props.value
        };
    };

    render() {
        return (
            <div {...this.props} className={`floatingTextInput-container ${this.props.className}`}>
                <div 
                    className={`floatingTextInput-label 
                    ${this.props.error && 'floatingTextInput-label_error'} 
                    ${this.state.focused || this.state.content ? `${this.props.floatingLabelClassName} floatingTextInput-label_focused` : this.props.placeholderClassName}`} 
                    style={this.state.focused ? Object.assign({}, { color: this.props.theme.primary }, this.props.floatingLabelStyle) : this.props.placeholderStyle}
                >
                    {this.props.placeholder}
                </div>
                <input
                    rows={this.props.rows}
                    type={this.props.type}
                    className={`floatingTextInput ${this.props.inputClassName} ${this.props.error && 'floatingTextInput_error'}`}
                    style={Object.assign({ color: this.props.theme.third}, this.props.inputStyle)}
                    onFocus={!this.props.disabled ? () => this.setState({ focused: true }) : undefined}
                    onBlur={(input) => this.setState({ focused: false, content: input.target.value })}
                    autoFocus={this.state.focused}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    disabled={this.props.disabled}
                />
                <div 
                    className={`floatingTextInput-border ${this.props.underlineClassName}`} 
                    style={Object.assign({}, this.props.underlineStyle, { borderBottomColor: this.props.underlineColor || this.props.theme.primary })} 
                />
                <div className='floatingTextInput-error'>{this.props.error && this.props.errorMessage}</div>
            </div>
        );
    };
};

export default withTheme(FloatingTextInput);
