import React, { Component } from "react";

export class TextMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
        };
    }
    handleOnChange = (event) => {
        this.setState({
            message: event.target.value,
        });
    };
    render() {
        return (
            <div>
                <textarea
                    cols="30"
                    rows="10"
                    value={this.state.message}
                    onChange={this.handleOnChange}
                    />
            </div>
        );
    }
}

export default TextMessage;
