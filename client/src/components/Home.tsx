import * as React from "react";
import { Question, getQuestions } from "../api";

export const Home = () => {
  const loadQuestions = () => {
    getQuestions().then((response) => {
      setQuestions(response);
    });
  };
  const [questions, setQuestions] = React.useState<Question[]>();
  React.useEffect(() => {
    loadQuestions();
  }, []);
  return <div>Render a list of currently available questions lolololo</div>;
};
