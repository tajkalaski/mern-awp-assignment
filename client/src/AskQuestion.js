import React, {Component} from 'react';
import {Link} from "@reach/router";

class AskQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }

    onSubmit() {
        this.props.askQuestion(this.state.input);
    }

    render() {
        return (
            <>
                <input name="input" onChange={event => this.onChange(event)} type="text"/>
                <button onClick={_ => this.onSubmit()}>Post Question</button>
            </>
        )
    }
}

export default AskQuestion;