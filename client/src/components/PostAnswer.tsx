import * as React from "react";
import { IQuestion, updateQuestion, Answer } from "../api";

interface State {
    text: string;
  }

class PostAnswer extends React.Component<IQuestion, State> {
  constructor(props) {
    super(props);
    this.state = { text: "" }
  }
  submitHandler = (event: { preventDefault: () => void }) => {
      console.log(this.props);
      const answer = this.state.text;
      const question: IQuestion  = {
          id: this.props.id,
          text: this.props.text,
          answers: [{
            id: 1,
            text: answer,
            rating: 0
          }]
      }
    event.preventDefault();
    updateQuestion(this.props.id, question);
  };

  changeHandler = (event: any) => {
    this.setState({ text: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <p>Post Answer:</p>
        <input type="text" onChange={this.changeHandler} />
        <input type="submit" />
      </form>
    );
  }
}

export { PostAnswer };
