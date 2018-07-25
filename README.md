JDesign
======
Jordan Design - React components styled with css

JDesign is a set of React components styled with CSS3.

Github repository: https://github.com/Jordanh1996/JDesign

Components examples: https://jdesign.herokuapp.com/

NOTE: heroku apps after 30 minutes without traffic are idling, so loading may take up to 30 seconds.

Installation
------

You can install with npm :

```
$ npm install --save jdesign
```

and also with yarn :

```
$ yarn add jdesign
```

Usage
------

All of the usage examples are at the components descriptions below, there is an example for each component.

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

## Modal

* Modal

## Text Inputs

* TextInput
* FloatingTextInput

## Text Areas

* TextArea
* FloatingTextArea

## Radio Buttons

* Radio

## Check Boxes

* Checkbox

## Switches

* Switch

## Select

* Select
* FloatingSelect
* Option


Props
=====

## Buttons

### Button

Usage:

```javascript
import React from 'react';
import { Button } from 'jdesign';

const MyComponent = () => (
    <div>
        <Button
            rounded
            onClick={() => console.log('clicked')}
            label='button'
        />
    </div>
)
```

Prop Name | Prop Type
----------|----------
All html button Props | *
label | String
children | JSX
rounded | Boolean
ripple | Boolean
rippleColor | String
className | String
style | Object
containerClassName | String
containerStyle | Object

### PushedButton

Usage:

```javascript
import React from 'react';
import { PushedButton } from 'jdesign';

const MyComponent = () => (
    <div>
        <PushedButton
            rounded
            onClick={() => console.log('clicked')}
            label='button'
        />
    </div>
)
```

Prop Name | Prop Type
----------|----------
All html button Props | *
label | String
children | JSX
rounded | Boolean
ripple | Boolean
rippleColor | String
className | String
innerButtonClassName | String
containerClassName | String
containerStyle | Object

### IconButton

Usage:

```javascript
import React from 'react';
import { IconButton} from 'jdesign';

const MyComponent = () => (
    <div>
        <IconButton
            rounded
            style={{ background: 'radial-gradient(#FFEE58, #FFF176)', boxShadow: '0 0 2px 0 #303030', color: '#303030' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.99961 21.50922" style={{ width: '1.4rem', height: '1.4rem', fill: '#808080' }}>
                <path d="M10.57 9.1H6.2L10.3.6a.43.43 0 0 0-.72-.47L.1 11.3a.43.43 0 0 0 .33.72H4.4L.05 20.9a.43.43 0 0 0 .72.46L10.9 9.8a.43.43 0 0 0-.33-.7zm-8.3 9.24L5.5 11.8a.43.43 0 0 0-.4-.64H1.36L8.04 3.3 5.1 9.3a.43.43 0 0 0 .4.63h4.1z"/>
            </svg>
        </IconButton>
    </div>
)
```

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
rippleColor | String
className | String
style | Object
containerClassName | String
containerStyle | Object

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
rippleColor | String
className | String
innerButtonStyle | Object
innerButtonClassName | String
containerClassName | String
containerStyle | Object

### AddButton, TrashButton, EditButton, GoogleButton

Usage:

```javascript
import React from 'react';
import { AddButton, TrashButton, EditButton, GoogleButton } from 'jdesign';

const MyComponent = () => (
    <div>
        <AddButton onClick={() => console.log('add button')} />
        <Trashbutton disabled />
        <EditButton ripple={false} />
        <GoogleButton />
    </div>
)
```

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

## Modal

### Modal

Usage:

```javascript
    import React from 'react';
    import { Modal, Button } from 'jdesign';

    class MyComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                open: false
            };
            this.openModal = this.openModal.bind(this);
            this.closeModal = this.closeModal.bind(this);
        };

        openModal() {
            this.setState({ open: true });
        };

        closeModal() {
            this.setState({ open: false });
        };

        render() {
            return (
                <div>
                    <h1>My Page</h1>
                    <Button
                        label='open modal'
                        onClick={this.openModal}
                    />
                    <Modal
                        open={this.state.open}
                        closeOnClickOutside={this.closeModal}
                    >
                        <h1>My Modal</h1>
                        <div>content...</div>
                    </Modal>
                </div>
            );
        };
    };
```

Prop Name | Prop Type
----------|----------
open | Boolean
closeOnClickOutside | Function
overlayClassName | String
overlayStyle | Object
className | String
style | Object

closeOnClickOutside is used if you want to close the modal when clicking outside of its container.
You need to pass it a function that will change the open prop given to the modal to false, like a state change.


## Text Inputs

### TextInput

Usage:

```javascript
    import React from 'react';
    import { TextInput } from 'jdesign';

    class MyComponent extends React.Component {

        state = {
            text: ''
        };

        onType = (e) => {
            const text = e.target.value;
            this.setState({ text });
        };

        render() {
            return (
                <div>
                    <TextInput onChange={this.onType} value={this.state.text} placeholder='EXAMPLE' />
                </div>
            );
        };
    };
```

Prop Name | Prop Type
----------|----------
all html input props | *

### FloatingTextInput

Usage:

```javascript
    import React from 'react';
    import { FloatingTextInput } from 'jdesign';

    class MyComponent extends React.Component {

        state = {
            text: ''
        };

        onType = (e) => {
            const text = e.target.value;
            this.setState({ text });
        };

        render() {
            return (
                <div>
                    <FloatingTextInput onChange={this.onType} value={this.state.text} placeholder='EXAMPLE' />
                    <FloatingTextInput 
                        onChange={this.onType} 
                        value={this.state.text} 
                        placeholder='EXAMPLE2' 
                        error={this.state.text.length < 6} 
                        errorMessage='must include at least 6 characters' 
                    />
                </div>
            );
        };
    };
```

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

Usage:

```javascript
    import React from 'react';
    import { TextArea } from 'jdesign';

    class MyComponent extends React.Component {

        state = {
            text: ''
        };

        onType = (e) => {
            const text = e.target.value;
            this.setState({ text });
        };

        render() {
            return (
                <div>
                    <TextArea onChange={this.onType} value={this.state.text} placeholder='EXAMPLE' rows={6} />
                </div>
            );
        };
    };
```

Prop Name | Prop Type
----------|----------
all html textarea props | *

### FloatingTextArea

Usage:

```javascript
    import React from 'react';
    import { FloatingTextArea } from 'jdesign';

    class MyComponent extends React.Component {

        state = {
            text: ''
        };

        onType = (e) => {
            const text = e.target.value;
            this.setState({ text });
        };

        render() {
            return (
                <div>
                    <FloatingTextArea onChange={this.onType} value={this.state.text} placeholder='EXAMPLE' rows={6} />
                </div>
            );
        };
    };
```

Prop Name | Prop Type
----------|----------
all html textare props | *
all FloatingTextInput props | *

## Radio

Usage:

```javascript
    import React from 'react';
    import { Radio } from 'jdesign';

    class MyComponent extends React.Component {

        state = {
            value: undefined
        };

        onCheck = (e) => {
            this.setState({ value: e.target.value });
        };


        render() {
            return (
                <div>
                    <Radio name="asd" onChange={this.onCheck} vale='1' />
                    <Radio name="asd" onChange={this.onCheck} value='2' color='red' />
                    <Radio name="asd" onChange={this.onCheck} value='3' disabled />
                </div>
            );
        };
    };
```

The color prop changes the color of the ripple, border(when clicked), and the checked mark.

Prop Name | Prop Type
----------|----------
all html input radio props | *
color | String

## Checkbox

Usage:

```javascript
    import React from 'react';
    import { Checkbox } from 'jdesign';

    class MyComponent extends React.Component {

        state = {
            checked: false
        };

        onCheck = (e) => {
            this.setState({ checked: e.target.checked });
        };


        render() {
            return (
                <div>
                    <Checkbox onChange={this.onCheck} defaultChecked />
                    <Checkbox disabled />
                    <Checkbox color='red' vColor='black' ripple />
                </div>
            );
        };
    };
```

The color prop changes the color of the ripple(if enabled), and background(when clicked).
vColor prop changes the background of the v sign when clicked.

Prop Name | Prop Type
----------|----------
all html input checkbox props | *
color | String
ripple | Boolean(default is false)
vColor | String

## Switch

Usage:

```javascript
    import React from 'react';
    import { Switch } from 'jdesign';

    class MyComponent extends React.Component {

        state = {
            checked: false
        };

        onCheck = (e) => {
            this.setState({ checked: e.target.checked });
        };


        render() {
            return (
                <div>
                    <Switch onChange={this.onCheck} defaultChecked />
                    <Switch disabled />
                    <Switch circleColor='red' railColor='pink' />
                </div>
            );
        };
    };
```

note: switch is technically an input type checkbox

Prop Name | Prop Type
----------|----------
all html input checkbox props | *
color | String
railColor | String
circleColor | String

## Select Input

### Select

Usage:

```javascript
    import React from 'react';
    import { Select, Option } from 'jdesign';

    class MyComponent extends React.Component {

        state = {
            selected: null
        };

        onSelect = ({ text, value }) => {
            this.setState({ selected: value });
        };


        render() {
            return (
                <div>
                    <Select onChange={this.onSelect} value={this.state.selected} defaultValue='b'>
                        <Option value='a'>1</Option>
                        <Option value='b'>2</Option>
                        <Option value='c'>3</Option>
                        <Option value='d'>4</Option>
                    </Select>
                </div>
            );
        };
    };
```

Prop Name | Prop Type
----------|----------
defaultValue | String
form | String
disabled | Boolean
className | String
style | Object
selectedClassName | String
selectedStyle | Object
selectedBackground | String
optionsClassName | String
optionsStyle | Object

### FloatingSelect

Prop Name | Prop Type
----------|----------
all Select props | *
floatingLabelClassName | String
floatingLabelStyle | Object
floatingFocusedLabelClassName | String
floatingFocusedLabelStyle | Object

### Option

Prop Name | Prop Type
----------|----------
selected | Boolean
disabled | Boolean


## Suggestions, Help & Contact

email: jordanhuri96@gmail.com

I reply as quicky as I can, mostly less than a day.
