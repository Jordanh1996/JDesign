import React from 'react';
import './index.css';

class Checkbox extends React.Component {

    onCheck() {
        if (this.props.ripple) {
            this.ripple();
        }
    };

    ripple() {
        const rippler = document.createElement('div');
        rippler.className = 'ripple';
        this.props.color ? rippler.setAttribute('style', `background-color: ${this.props.color}`) : null;
        this.container.insertBefore(rippler, this.checkbox);
        setTimeout(() => {
            this.container.removeChild(this.container.firstChild);
        }, 350);
    };

    render() {
        return (
            <div
                key={this.props.key}
                className='checkbox-container' 
                onClick={this.onCheck.bind(this)} 
                ref={(container) => this.container = container}
            >
                <input
                    type='checkbox'
                    ref={(checkbox) => this.checkbox = checkbox}
                    className='checkbox'
                    autoFocus={this.props.autoFocus}
                    defaultChecked={this.props.defaultChecked}
                    defaultValue={this.props.defaultValue}
                    disabled={this.props.disabled}
                    form={this.props.form}
                    name={this.props.name}
                    required={this.props.required}
                    value={this.props.value}
                />
                <div className='checkbox-outer' style={{ color: this.props.color }}>
                    <div className='checkbox-inner' style={{ background: this.props.color }}>
                        <div className='checkbox-hide' style={{ background: this.props.color }} />
                        <svg viewBox="0 0 500 500" className='checkbox-svg' style={{ fill: this.props.vColor }}>
                            <path d="M 207.375,425.00c-10.875,0.00-21.175-5.075-27.775-13.825L 90.25,293.225c-11.625-15.35-8.60-37.20, 6.75-48.825 c 15.375-11.65, 37.20-8.60, 48.825,6.75l 58.775,77.60l 147.80-237.275c 10.175-16.325, 31.675-21.325, 48.025-11.15 c 16.325,10.15, 21.325,31.675, 11.125,48.00L 236.975,408.575c-6.075,9.775-16.55,15.90-28.025,16.40C 208.425,425.00, 207.90,425.00, 207.375,425.00z" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    };
};

export default Checkbox;
