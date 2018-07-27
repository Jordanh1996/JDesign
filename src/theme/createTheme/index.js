import React from 'react';

const { Provider, Consumer } = React.createContext({
    primary: '#0096EF',
    secondary: '#FFFFFF',
    third: '#202020'
});

export { Provider as Theme, Consumer };
