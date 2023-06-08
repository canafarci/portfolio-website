import React from "react";
import App from "./App";
import "./index.css";
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
