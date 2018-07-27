import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';
import Ink from 'react-ink';

const Button = (props) => (
    <div style={props.containerStyle} className={props.containerClassName}>
        <button
            {...props}
            className={`button ${props.rounded ? 'rounded-button' : ''} ${props.className}`}
            style={Object.assign({}, props.style, { background: props.theme.primary, color: props.theme.secondary })}
        >
            {props.children}
            {props.label}
            {
                props.ripple === false ?
                null :
                <Ink style={{ color: props.rippleColor || props.theme.secondary }} />
            }
        </button>
    </div>
);

export default withTheme(Button);
