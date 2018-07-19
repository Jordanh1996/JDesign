import React from 'react';
import './index.css';
import Ink from 'react-ink';

const IconButton = (props) => (
    <button
        {...props}
        className={`icon-button ${props.rounded ? 'rounded-button' : ''} ${props.className}`}
    >
        {props.children}
        <p 
            className={`icon-button-text ${props.labelClassName}`}
            style={props.labelStyle}
        >
            {props.label}
        </p>
        {
            props.ripple === false ?
            null :
            <Ink style={{ color: props.rippleColor }} />
        }
    </button>
);

export default IconButton;
