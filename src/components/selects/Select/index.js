import React from 'react';
import './index.css';
import Options from './Options';
import { VelocityTransitionGroup } from 'velocity-react';

class Select extends React.Component {

    constructor(props) {
        super(props);
        this.closeOptions = this.closeOptions.bind(this);
        this.openOptions = this.openOptions.bind(this);
        this.onChange = this.onChange.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
        this.getPickedOptionDimensions = this.getPickedOptionDimensions.bind(this);
        this.state = {
            value: '',
            text: '',
            opened: false
        };
        for (let i = 0; i < props.children.length; i++) {
            if (props.children[i].props.selected) {
                const text = props.children[i].props.children;
                this.state.text = text;
                this.state.value = props.children[i].props.value || text;
                break;
            }
        }
        if (props.defaultValue || props.value) {
            this.state.value = props.defaultValue || props.value;
            this.state.text = props.children.find((el) => el.props.value === (props.defaultValue || props.value)).props.children;
        }
        if (props.value && (typeof props.onChange !== 'function')) {
            console.warn('You have hardcoded a value for Select but did not set an onChange handler to change it.' +
            '\n Please set an onChange handler with a function to change value or if you intended to make a default value ' +
            'use defaultValue prop instead.' 
            )
        }
    };

    onChange(e) {
        this.closeOptions();
        const text = e.currentTarget.textContent;
        const value = e.currentTarget.getAttribute('value') || text;
        this.setState({ text, value });
        if (this.props.onChange) {
            this.props.onChange({ text: e.currentTarget.textContent, value }, e);
        }
    };

    renderChildren(children) {
        return React.Children.map(children, (child) => {
            let style = {};
            let className = `option ${this.props.optionClassName}`;
            if ((this.props.value || this.state.value) === (child.props.value || child.props.children)) {
                style.background = this.props.selectedBackground || '#EEEEEE';
                style = { ...style ,...this.props.selectedStyle}
                className += ' ' + this.props.selectedClassName;
            }
            const childWithProps = React.cloneElement(child, { onClick: this.onChange, style, className });
            return childWithProps;
        });
    };

    openOptions() {
        this.setState({ opened: true });
    };

    closeOptions() {
        this.setState({ opened: false });
    };

    getPickedOptionDimensions() {
        return this.pickedOption.getBoundingClientRect();
    };

    render() {
        const { children } = this.props;
        let text = '';
        for (let i = 0; i < this.props.children.length; i++) {
            if ((this.props.children[i].props.value || this.props.children[i].props.text) === (this.props.value || this.state.value)) {
                text = this.props.children[i].props.children;
                break;
            }
        }

        return (
            <div className='select-container' tabIndex='0' onBlur={this.closeOptions} disabled={this.props.disabled}>
                <input type='hidden' value={this.props.value || this.state.value} form={this.props.form} disabled={this.props.disabled} />
                <VelocityTransitionGroup enter={{ animation: "slideDown" }} leave={{ animation: "slideUp" }} duration={300}>
                {
                    this.state.opened && 
                    <Options 
                        getPickedOptionDimensions={this.getPickedOptionDimensions}
                        className={this.props.optionsClassName}
                        style={this.props.optionsStyle}
                    >
                        {this.renderChildren(children)}
                    </Options>
                }
                </VelocityTransitionGroup>
                <div 
                    className={`select-picked ${this.props.className}`}
                    style={Object.assign({}, this.props.style)} 
                    onClick={this.openOptions} 
                    ref={(pickedOption) => this.pickedOption = pickedOption} 
                    disabled={this.props.disabled}
                >
                    {text}
                    <svg viewBox="0 0 255 255" className='select-icon'>
                        <g id="arrow-drop-down">
                            <polygon points="0,63.75 127.5,191.25 255,63.75"/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    };
};

export default Select;
