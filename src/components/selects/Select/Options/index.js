import React from 'react';
import './index.css';

class Options extends React.Component {

    componentWillMount() {
        this.bottom = 'auto'
        if (window.innerHeight - this.props.getPickedOptionDimensions().y < 300) {
            this.bottom = -window.pageYOffset;
        }
    };

    render() {
        return (
            <div className={`options-open ${this.props.className}`} style={Object.assign({}, this.props.style ,{ bottom: this.bottom })} ref={(options) => this.options = options}>
                {this.props.children}
            </div>
        );
    };
};

export default Options;