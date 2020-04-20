import React, {Component} from 'react';
import {Link} from "@reach/router";

class Questions extends Component {

    render() {
        const questions = this.props.questions.map(question =>
            <li key={question._id}>
                <Link to={`/kitten/${question._id}`}>{question.text}</Link>
            </li>
        );
        return (
            <>
                <h1>Questions</h1>
                <ol>
                    {questions}
                </ol>
            </>
        );
    }

}

export default Questions;
