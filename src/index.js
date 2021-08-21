import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const subjects = ["ddi", "daw", "poo"];
const languages = { python: true, css: false, php: true };

ReactDOM.render(
  <App
    name="Natilu"
    lastname="Guallichico"
    age={25}
    subjects={subjects}
    languages={languages}
    other={true}
  />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
