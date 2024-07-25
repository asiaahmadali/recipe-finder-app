import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./App.css";
// import { HashRouter } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <App></App>
    {/* </HashRouter> */}
  </React.StrictMode>
);
