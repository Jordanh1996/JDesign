import React from 'react';
import './index.css';
import Ink from 'react-ink';

const PushedIconButton = (props) => (
    <button
        {...props}
        className={`pushedIconButton-outer ${props.rounded ? 'rounded-button' : ''} ${props.className}`}
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
            <Ink />
        }
    </div>
    </button>
);

export default PushedIconButton;
