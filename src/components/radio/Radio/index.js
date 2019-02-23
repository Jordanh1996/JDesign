import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';

class Radio extends React.Component {

    onCheck() {
        if (this.props.ripple) {
            const rippler = document.createElement('div');
            rippler.className = 'ripple';
            const color = this.props.color || this.props.theme.primary;
            rippler.style.backgroundColor = color;
            this.container.insertBefore(rippler, this.input);
            setTimeout(() => {
                this.container.removeChild(this.container.firstChild);
            }, 350);
        }
    };

    render() {
        const { 
            key,
            color,
            theme,
            style,
            checked,
            ripple,
            ...other
        } = this.props;
        return (
            <div 
                className='radio-container'
                key={key}
                ref={(container) => this.container = container}
                onClick={this.onCheck.bind(this)}
                style={Object.assign({ color: color || theme.primary }, style)}
            >
                <input
                    type='radio'
                    className='radio'
                    ref={(input) => this.input = input}
                    checked={checked}
                    {...other}
                />
                <div className='radio-outer' style={checked ? { boxShadow: '0 0 2px 2px'} : {}}>
                    <div className='radio-inner' style={Object.assign({ background: color || theme.primary }, checked ? { transform: 'scale(1)'} : {})} />
                </div>
            </div>
        );
    };
};

Radio.defaultProps = {
    ripple: true
}

export default withTheme(Radio);
