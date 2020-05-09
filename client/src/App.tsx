import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import { Questions } from "./components/Questions";
import { AskQuestion } from "./components/AskQuestion";
import { Home } from "./components/Home";
import { Button, Container, Link, Typography } from "@material-ui/core";

export default function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <div>
          <Link component={RouterLink} to="/">
            <Button>Home</Button>
          </Link>
          <Link component={RouterLink} to="/questions">
            <Button>Questions</Button>
          </Link>

          <Link component={RouterLink} to="/ask-questions">
            <Button>Submit Question</Button>
          </Link>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/ask-questions">
            <AskQuestion />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
