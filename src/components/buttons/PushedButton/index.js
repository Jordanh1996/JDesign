import React from 'react';
import withTheme from '../../../theme/withTheme';
import './index.css';
import Ink from 'react-ink';

const PushedButton = (props) => (
    <div className={props.containerClassName} style={props.containerStyle}>
        <button
            {...props}
            className={`pushed-button-container ${props.rounded ? 'rounded-button' : ''} ${props.className}`}
            style={Object.assign({}, { background: props.theme.primary, color: props.theme.secondary }, props.style)}
        >
            <div className={`pushed-button ${props.rounded ? 'rounded-button' : ''} ${props.innerButtonClassName}`}>
                {props.children}
                {props.label}
                {
                    props.ripple === false ?
                    null :
                    <Ink style={{ color: props.rippleColor || props.theme.secondary }} />
                }
            </div>
        </button>
    </div>
);

export default withTheme(PushedButton);
