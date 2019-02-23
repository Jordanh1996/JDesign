import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';
import Ink from 'react-ink';

const PushedIconButton = (props) => {
    const {
        containerStyle,
        containerClassName,
        className,
        rounded,
        style,
        theme,
        children,
        label,
        labelStyle,
        labelClassName,
        ripple,
        rippleColor,
        innerButtonClassName,
        innerButtonStyle,
        ...other
    } = props;
    
    return (
        <div className={containerClassName} style={containerStyle}>
            <button
                {...other}
                className={`pushedIconButton-outer ${rounded ? 'rounded-button' : ''} ${className}`}
                style={Object.assign({ background: theme.primary, color: theme.secondary }, style)}
            >
                <div className={`pushedIconButton-inner ${rounded ? 'rounded-button' : ''} ${innerButtonClassName}`} style={innerButtonStyle}>
                    {children}
                    {
                        label ?
                            <p
                                className={`pushedIconButton-text ${labelClassName}`}
                                style={labelStyle}
                            >
                                {label}
                            </p> : null
                    }
                    {
                        ripple === false ?
                            null :
                            <Ink style={{ color: rippleColor || theme.secondary }} />
                    }
                </div>
            </button>
        </div>
    );
};

export default withTheme(PushedIconButton);
