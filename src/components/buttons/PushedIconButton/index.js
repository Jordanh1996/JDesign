import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';
import Ink from 'react-ink';

const PushedIconButton = (props) => (
    <div className={props.containerClassName} style={props.containerStyle}>
        <button
            {...props}
            className={`pushedIconButton-outer ${props.rounded ? 'rounded-button' : ''} ${props.className}`}
            style={Object.assign({ background: props.theme.primary, color: props.theme.secondary }, props.style)}
        >
        <div className={`pushedIconButton-inner ${props.rounded ? 'rounded-button' : ''} ${props.innerButtonClassName}`} style={props.innerButtonStyle}>
            {props.children}
            {
                props.label ?
                <p 
                    className={`pushedIconButton-text ${props.labelClassName}`}
                    style={props.labelStyle}
                >
                    {props.label}
                </p> : null
            }
            {
                props.ripple === false ?
                null :
                <Ink style={{ color: props.rippleColor || props.theme.secondary }} />
            }
        </div>
        </button>
    </div>
);

export default withTheme(PushedIconButton);
