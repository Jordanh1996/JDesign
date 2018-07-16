import React from 'react';
import './index.css';

const TextInput = (props) => (
    <input
        {...props}
        className={`textInput ${props.className}`}
    />
);

export default TextInput;