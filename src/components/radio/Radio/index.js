import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';

class Radio extends React.Component {

    onCheck() {
        const rippler = document.createElement('div');
        rippler.className = 'ripple';
        const color = this.props.color || this.props.theme.primary;
        rippler.style.backgroundColor = color;
        this.container.insertBefore(rippler, this.input);
        setTimeout(() => {
            this.container.removeChild(this.container.firstChild);
        }, 350);
    };

    render() {
        return (
            <div 
                className='radio-container'
                key={this.props.key}
                ref={(container) => this.container = container}
                onClick={this.onCheck.bind(this)}
                style={Object.assign({ color: this.props.color || this.props.theme.primary }, this.props.style)}
            >
                <input
                    type='radio'
                    className='radio'
                    ref={(input) => this.input = input}
                    autoFocus={this.props.autoFocus}
                    checked={this.props.checked}
                    defaultChecked={this.props.defaultChecked}
                    defaultValue={this.props.defaultValue}
                    disabled={this.props.disabled}
                    form={this.props.form}
                    name={this.props.name}
                    required={this.props.required}
                    value={this.props.value}
                    onClick={this.props.onClick}
                    onChange={this.props.onChange}
                />
                <div className='radio-outer'>
                    <div className='radio-inner' style={{ background: this.props.color || this.props.theme.primary }} />
                </div>
            </div>
        );
    };
};


export default withTheme(Radio);
