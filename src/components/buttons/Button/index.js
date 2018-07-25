import React from 'react';
import './index.css';
import Ink from 'react-ink'

const Button = (props) => (
    <div style={props.containerStyle} className={props.containerClassName}>
        <button
            {...props}
            className={`button ${props.rounded ? 'rounded-button' : ''} ${props.className}`}
        >
            {props.children}
            {props.label}
            {
                props.ripple === false ?
                null :
                <Ink style={{ color: props.rippleColor }} />
            }
        </button>
    </div>
);

export default Button;
