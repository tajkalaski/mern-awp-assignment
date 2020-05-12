import * as React from "react";
import { Question, getQuestions, Answer } from "../api";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
  },
});

const Answers = (props: { data: Question }) => {
  return (
    <Box>
      {props.data.answers.map((a) => {
        <Card key={a.text}>
          <CardContent>
            <Typography>{`Answer ${a.text}`}</Typography>
            <Typography>{`Answer ${a.rating}`}</Typography>
          </CardContent>
        </Card>;
      })}
    </Box>
  );
};

export const Questions = () => {
  // First, upon arriving, we need to define the state
  // to store the questions in
  const [questions, setQuestions] = React.useState<Question[]>([]);
  // Then a React.useEffect() for the initial mount
  React.useEffect(() => {
    loadQuestions();
  }, []);
  const loadQuestions = () => {
    getQuestions().then((response) => {
      setQuestions(response);
    });
  };

  const classes = useStyles();
  return (
    <Container>
      <div>
        {questions.map((q) => (
          <Box key={q.text} mb={4}>
            <Card key={q.text} className={classes.root}>
              <CardContent key={q.text}>
                <Typography
                  key={q.text}
                  variant="body2"
                >{`Question: ${q.text}`}</Typography>
                <Typography>
                  {q.answers.map((a) => {
                    <Typography>{a.text}</Typography>;
                  })}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </div>
    </Container>
  );
};
