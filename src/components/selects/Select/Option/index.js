import React from 'react';
import './index.css';

const Option = (props) => (
    <div className={props.className} style={Object.assign({}, props.style)} onClick={props.onClick} disabled={props.disabled} value={props.value} tabIndex="0">{props.children}</div>
);

export default Option;
