import React from 'react';
import './index.css';

const TextInput = (props) => (
    <div className={props.containerClassName} style={props.containerStyle}>
        <input
            {...props}
            className={`textInput ${props.className}`}
        />
    </div>
);

export default TextInput;