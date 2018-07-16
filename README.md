JDesign
======
Jordan Design - React components styled with css

JDesign is a set of React components styled with CSS3.

Github repository: https://github.com/Jordanh1996/JDesign

Components examples: https://jdesign.herokuapp.com/

NOTE: heroku apps after 30 minutes without traffic are idling, so loading may take up to 30 seconds.

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

## Text Inputs

* TextInput
* FloatingTextInput

## Text Areas

* TextArea
* FloatingTextArea

Props
=====

## Buttons

### Button

Prop Name | Prop Type
----------|----------
All html button Props | *
label | String
children | JSX
rounded | Boolean
ripple | Boolean
className | String

### PushedButton

Prop Name | Prop Type
----------|----------
All html button Props | *
label | String
children | JSX
rounded | Boolean
ripple | Boolean
className | String
innerButtonClassName | String

### IconButton

To insert the icon/image you need to pass it as the children prop in JSX.
In the Usage example you can see example of passing an html svg as the children.
You can also insert a <img> or anything you'd like.

Prop Name | Prop Type
----------|----------
All html button Props | *
label | String
labelStyle | Object
labelClassName | String
children | JSX
rounded | Boolean
ripple | Boolean
className | String

### PushedIconButton

To insert the icon/image you need to pass it as the children prop in JSX.
In the Usage example you can see example of passing an html svg as the children.
You can also insert a <img> or anything you'd like.

Prop Name | Prop Type
----------|----------
All html button Props | *
label | String
labelStyle | Object
labelClassName | String
children | JSX
rounded | Boolean
ripple | Boolean
className | String
innerButtonStyle | Object
innerButtonClassName | String

### AddButton, TrashButton, EditButton, GoogleButton

Prop Name | Prop Type
----------|----------
All IconButton Props | *
All html button Props | *
svgStyle | Object
svgClassName | String

### PushedGoogleButton

Prop Name | Prop Type
----------|----------
All PushedIconButton Props | *
All html button Props | *
svgStyle | Object
svgClassName | String


## Text Inputs

### TextInput

Prop Name | Prop Type
----------|----------
all html input props | *

### FloatingTextInput

if you want to change the floating label color with a className you may have to add !important.
eg: 
```css
.floatingLabelClassExample {
    color: red !important;
}
```

Prop Name | Prop Type
----------|----------
all html input props | *
error | Boolean
errorMessage | String
floatingLabelClassName | String
floatingLabelStyle | Object
placeholderClassName | String
placeholderStyle | Object
inputClassName | String
inputStyle | Object
underlineClassName | String
underlineStyle | Object
underlineColor | String

## Text Areas

### TextArea

Prop Name | Prop Type
----------|----------
all html textarea props | *

### FloatingTextArea

Prop Name | Prop Type
----------|----------
all html textare props | *
all FloatingTextInput props | *


## Suggestions, Help & Contact

email: jordanhuri96@gmail.com

I reply as quicky as I can, mostly less than a day.
