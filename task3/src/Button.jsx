import React, { Component } from 'react';
class ClickButton extends Component {
    state = {
        clicked: false,
        text: "Click here"
    };
    clickHandler = () => {
        this.setState({ text: "Clicked", clicked: true });
    };
    render() {
        const { text, clicked } = this.state;
        let className = "clickButton";
        if (!clicked) {
            className += " clickButtonGrey";
        } else {
            className += " clickButtonBlue";
        }
        return (
            <button className={className} type='button' onClick={this.clickHandler}>
                {text}
            </button>
        );
    }
}
export default ClickButton