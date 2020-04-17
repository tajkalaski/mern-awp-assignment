import React, {Component} from 'react';
import Questions from './Questions';
import Question from './Question';
import { Router } from "@reach/router";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const url = "http://localhost:8080/api/questions";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            questions: data
        })
    }

    getQuestion(id) {
        const question = this.state.questions.find(q => q.id === parseInt(id));
        return question;
    }

    async postAnswer(id, text) {
        console.log("postAnswer", id, text);
        const url = `http://localhost:8080/api/questions/${id}/answers`;

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                text: text
            })
        });
        const data = await response.json();
        console.log("Printing the response:", data);
    }

    render() {
        return (
            <>
                <h1>QA</h1>
                <Router>
                    <Questions path="/" data={this.state.questions}></Questions>
                    <Question path="/question/:id"
                              getQuestion={id => this.getQuestion(id)}
                              postAnswer={(id, text) => this.postAnswer(id, text)}
                    ></Question>
                </Router>
            </>
        );
    }
}

export default App;

