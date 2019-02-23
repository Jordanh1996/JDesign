import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';
import Ink from 'react-ink';

const PushedButton = (props) => {
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
        innerButtonClassName,
        ...other
    } = props;
    
    return (
        <div className={containerClassName} style={containerStyle}>
            <button
                {...other}
                className={`pushed-button-container ${rounded ? 'rounded-button' : ''} ${className}`}
                style={Object.assign({}, { background: theme.primary, color: theme.secondary }, style)}
            >
                <div className={`pushed-button ${rounded ? 'rounded-button' : ''} ${innerButtonClassName}`}>
                    {children}
                    {label}
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

export default withTheme(PushedButton);
