import * as React from "react";
import { createQuestion } from "../api";

interface State {
  text: string;
}

class AskQuestion extends React.Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { text: "" };
  }
  submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    createQuestion(this.state.text);
  };

  changeHandler = (event: any) => {
    this.setState({ text: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>Hello, please submit a Question</h1>
        <p>Enter Question:</p>
        <input type="text" onChange={this.changeHandler} />
        <input type="submit" />
      </form>
    );
  }
}

export { AskQuestion };
