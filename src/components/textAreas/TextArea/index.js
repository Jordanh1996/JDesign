import React from 'react';
import './index.css';

const TextArea = (props) => (
    <textarea
        {...props}
        className={`textArea ${props.className}`}
    />
);

export default TextArea;
