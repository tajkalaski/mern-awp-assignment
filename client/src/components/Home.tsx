import * as React from "react";
import { Question, getQuestions } from "../api";

export const Home = () => {
  // first define states
  const [questions, setQuestions] = React.useState<Question[]>([]);
  // Then a effect for the initial mount
  React.useEffect(() => {
    loadQuestions();
  }, []);
  const loadQuestions = () => {
    getQuestions().then((response) => {
      setQuestions(response);
    });
  };
  return (
    <React.Fragment>
      <div>
        {questions.map((q) => (
          <h1 key={q.text}>{q.text}</h1>
        ))}
      </div>
    </React.Fragment>
  );
};
