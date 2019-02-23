import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';
import Ink from 'react-ink';

const IconButton = (props) => {
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
        labelClassName,
        labelStyle,
        ...other
    } = props;

    return (
        <div className={containerClassName} style={containerStyle}>
            <button
                {...other}
                className={`icon-button ${rounded ? 'rounded-button' : ''} ${className}`}
                style={Object.assign({ background: theme.primary, color: theme.secondary }, style)}
            >
                {children}
                <p
                    className={`icon-button-text ${labelClassName}`}
                    style={labelStyle}
                >
                    {label}
                </p>
                {
                    ripple === false ?
                        null :
                        <Ink style={{ color: rippleColor || theme.secondary }} />
                }
            </button>
        </div>
    );
};

export default withTheme(IconButton);
