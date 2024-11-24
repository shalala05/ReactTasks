import React, { Component } from 'react';
class ClickButton extends Component {
    state = {
        text: "Click here"
    };
    render() {
        const { text } = this.state;
        return (
            <button className="clickButton" type='button'>
                {text}
            </button>
        );
    }
}
export default ClickButton