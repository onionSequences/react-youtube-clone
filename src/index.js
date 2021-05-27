import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";
import "typeface-roboto";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
