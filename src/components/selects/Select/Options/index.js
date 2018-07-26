import React from 'react';
import './index.css';

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.arrowKey = this.arrowKey.bind(this);
        this.search = this.search.bind(this);
        this.child = undefined;
        this.input = '';
    };
    
    componentWillMount() {
        this.pickedOptionsDimensions = this.props.getPickedOptionDimensions();
    };

    componentDidMount() {
        this.bottom = 'auto';
        const height = this.options.getBoundingClientRect().height;
        if (window.innerHeight - this.pickedOptionsDimensions.y < height) {
            this.bottom = -window.pageYOffset + window.innerHeight - this.pickedOptionsDimensions.y - this.pickedOptionsDimensions.height;
        }
        window.addEventListener('keydown', this.arrowKey);
        window.addEventListener('keydown', this.search);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.arrowKey);
        window.removeEventListener('keydown', this.search);
    };

    arrowKey(e) {
        if ((e.keyCode || e.which) == 38) {
            e.preventDefault();
            try {
                this.child = this.child.previousSibling || this.options.lastChild;
            } catch(e) {
                this.child = this.options.lastChild;
            }
            this.child.focus();
        }
        if ((e.keyCode || e.which) == 40) {
            e.preventDefault();
            try {
                this.child = this.child.nextSibling || this.options.firstChild;
            } catch(e) {
                this.child = this.options.firstChild;
            }
            this.child.focus();
        }
        if ((e.keyCode || e.which) == 13) {
            document.activeElement.click();
        }
    };

    search(e) {
        if (((e.keyCode || e.which) > 47 && (e.keyCode || e.which) < 91) || (e.keyCode || e.which) == 32) {
            e.preventDefault();
            if (e.repeat) return;
            if (this.input.length > 0) {
                this.input += e.key;
                for (let i = 0; i < this.props.children.length; i++) {
                    if ((this.props.children[i].props.children).toLowerCase().match(this.input)) {
                        this.child = this.options.children[i];
                        return this.child.focus();
                    }
                }
            }
            this.input = e.key;
            for (let i = 0; i < this.props.children.length; i++) {
                if ((this.props.children[i].props.children).toLowerCase().match(this.input)) {
                    this.child = this.options.children[i];
                    return this.child.focus();
                }
            }
            this.input = '';
        }
    };

    render() {
        return (
            <div className={`options-open ${this.props.className}`} style={Object.assign({}, this.props.style ,{ bottom: this.bottom })} ref={(options) => this.options = options} tabIndex="0">
                {this.props.children}
            </div>
        );
    };
};

export default Options;