import React, {Component} from 'react';

class Questions extends Component {
    render() {
        const list = this.props.data.map(q =>
            <li>{q.question}</li>);

        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default Questions;

