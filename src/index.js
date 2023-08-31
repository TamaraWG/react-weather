import React from "react";
import ReactDom from "react-dom";
import { BrowserRoutes } from "react-routes-dom";
import App from "./App";

ReactDom.render(
  <BrowserRoutes>
    <App />
  </BrowserRoutes>,
  document.querySelector("#weather")
);
