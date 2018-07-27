import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';
import Ink from 'react-ink';

const IconButton = (props) => (
    <div className={props.containerClassName} style={props.containerStyle}>
        <button
            {...props}
            className={`icon-button ${props.rounded ? 'rounded-button' : ''} ${props.className}`}
            style={Object.assign({ background: props.theme.primary, color: props.theme.secondary }, props.style)}
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
                <Ink style={{ color: props.rippleColor || props.theme.secondary }} />
            }
        </button>
    </div>
);

export default withTheme(IconButton);
