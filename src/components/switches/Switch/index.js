import React from 'react';
import './index.css';

const Switch = (props) => (
    <div className='switch-container'>
        <input
            type='checkbox'
            className='switch'
            autoFocus={props.autoFocus}
            defaultChecked={props.defaultChecked}
            defaultValue={props.defaultValue}
            disabled={props.disabled}
            form={props.form}
            name={props.name}
            required={props.required}
            value={props.value}
            onClick={props.onClick}
            onChange={props.onChange}
        />
        <div className='switch-rail' style={{ background: props.railColor }}>
            <div className='switch-circle' style={{ background: props.circleColor }} />
        </div>
    </div>
);

export default Switch;
