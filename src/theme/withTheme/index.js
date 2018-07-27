import React from 'react';
import { Consumer } from '../index';

export default (Component) => {
    return (props) => (
        <Consumer>
            {
                (theme) => {
                    return <Component {...props} theme={theme} />
                }
            }
        </Consumer>
    );
};
