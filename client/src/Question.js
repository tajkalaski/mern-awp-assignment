import PostAnswer from './PostAnswer';
import React, {Component} from 'react';
import {Link} from "@reach/router";

class Question extends Component {
    render() {
        const id = this.props.id;
        const question = this.props.getQuestion(this.props.id);
        let content = <p>Loading</p>;
        if (question) {
            content =
                <>
                    <h1>{question.text}</h1>

                    <h3>Answers</h3>
                    <ul>
                        {question.answers.map(a => <li key={a}>{a}</li>)}
                    </ul>

                    {/* PostAnswer */}
                    <PostAnswer id={id} postAnswer={(id, text) => this.props.postAnswer(id, text)}/>

                    <Link to="/">Back</Link>
                </>
        }
        return content;
    }
}

export default Question;




