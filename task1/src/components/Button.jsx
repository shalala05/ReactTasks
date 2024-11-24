import React, { Component } from "react";
class Button extends Component {
    handleClick = () => {
        console.log("Button click!");
    };
    render() {
        return (
            <button className="clickButton" onClick={this.handleClick}>
                Click Me
            </button>
        );
    }
}

export default Button;
