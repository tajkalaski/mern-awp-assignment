import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "regenerator-runtime/runtime";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
