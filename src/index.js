import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const el = React.createElement(
  "h1",
  {
    style: {
      color: "#fff",
      textAlign: "center",
      marginTop: "50px",
      fontSize: "45px"
    }
  },
  "Hello World"
);
const title = {
  color: "#fff",
  textAlign: "center",
  marginTop: "50px",
  fontSize: "45px"
}; 

const el1 = <h1 style={title}>My counter</h1>;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    {el}
    {el1}
    <App />
  </>,
  rootElement
);
