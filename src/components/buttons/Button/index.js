import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.scss';
import Ink from 'react-ink';

const Button = (props) => {
    const {
        containerStyle,
        containerClassName,
        className,
        rounded,
        style,
        theme,
        children,
        label,
        ripple,
        rippleColor,
        ...other
    } = props;
    return (
        <button
            {...other}
            className={`button ${rounded ? 'rounded-button' : ''} ${className}`}
            style={Object.assign({}, style, { background: theme.primary, color: theme.secondary })}
        >
            {children}
            {label}
            {
                ripple === false ?
                    null :
                    <Ink style={{ color: rippleColor || theme.secondary }} />
            }
        </button>
    )
};

export default withTheme(Button);
