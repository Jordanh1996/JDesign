JDesign
======
Jordan Design - React components styled with css

JDesign is a set of React components styled with CSS3.

Installation
------

```
$ npm install --save jdesign
```

Usage
------

```javascript
import React from 'react';
import { Button, IconButton, TrashButton } from 'jdesign';

const MyComponent = () => (
    <div>
        <Button
            rounded
            onClick={() => console.log('clicked')}
            label='button'
        />

        <IconButton
            rounded
            style={{ background: 'radial-gradient(#FFEE58, #FFF176)', boxShadow: '0 0 2px 0 #303030', color: '#303030' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.99961 21.50922" style={{ width: '1.4rem', height: '1.4rem', fill: '#808080' }}>
                <path d="M10.57 9.1H6.2L10.3.6a.43.43 0 0 0-.72-.47L.1 11.3a.43.43 0 0 0 .33.72H4.4L.05 20.9a.43.43 0 0 0 .72.46L10.9 9.8a.43.43 0 0 0-.33-.7zm-8.3 9.24L5.5 11.8a.43.43 0 0 0-.4-.64H1.36L8.04 3.3 5.1 9.3a.43.43 0 0 0 .4.63h4.1z"/>
            </svg>
        </IconButton>

        <TrashButton />
    </div>
)
```

Available Components
======

## Buttons

* Button
* PushedButton
* IconButton
* PushedIconButton
* AddButton
* EditButton
* TrashButton
* GoogleButton
* GooglePushedButton