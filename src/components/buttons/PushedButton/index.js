import React from 'react';
import './index.css';
import Ink from 'react-ink';

const PushedButton = (props) => (
    <button
        {...props}
        className={`pushed-button-container ${props.rounded ? 'rounded-button' : ''} ${props.className}`}
    >
        <div className={`pushed-button ${props.rounded ? 'rounded-button' : ''} ${props.innerButtonClassName}`}>
            {props.children}
            {props.label}
            {
                props.ripple === false ?
                null :
                <Ink />
            }
        </div>
    </button>
);

export default PushedButton;
