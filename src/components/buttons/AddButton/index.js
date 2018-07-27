import React from 'react';
import IconButton from '../IconButton';

const AddButton = (props) => (
    <IconButton {...props} rounded rippleColor='white' style={{ background: '#0096EF' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            style={Object.assign({ width: '1.4rem', height: '1.4rem', fill: 'white' }, props.svgStyle || {})}
            className={props.svgClassName}
        >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
    </IconButton>
);

export default AddButton;
