import React from 'react';
import IconButton from '../IconButton';

const TrashButton = (props) => (
    <IconButton {...props} rounded style={Object.assign({ background: 'radial-gradient(#EF5350, #F44336)' }, props.style)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
            style={Object.assign({ width: '1.4rem', height: '1.4rem', fill: 'white' }, props.svgStyle || {})}
            className={props.svgClassName}
        >
            <path d="M17.573 1.848c.083.699-.476 1.152-1.182 1.152h-8.774c-.704 0-1.266-.452-1.182-1.156-1.329.281-4.435 1.159-4.435 2.516 0 .303.103.7.235 1.361 3.175 2.953 15.758 3.088 19.476.244.159-.824.289-1.278.289-1.611 0-1.333-3.091-2.223-4.427-2.506zm3.113 6.897c-.868 4.587-2.184 10.54-2.709 13.287-1.079 1.312-3.545 1.968-6.013 1.968s-4.935-.656-6.013-1.968c-.529-2.884-1.834-8.868-2.684-13.414 3.154 1.274 7.398 1.401 8.895 1.401 1.771 0 5.561-.151 8.524-1.274zm-13.069-6.763c.922 0 1.669-1.08 1.669-1.982h5.437c0 .902.747 1.982 1.668 1.982h-8.774z"/>
        </svg>
    </IconButton>
);

export default TrashButton;
