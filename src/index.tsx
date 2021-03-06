import * as React from "react";
import * as ReactDOM from "react-dom";
// import "babel-polyfill"; //已弃用
import "core-js";
import "regenerator-runtime/runtime";
import "./assets/css/index.less";
import "antd-mobile/dist/antd-mobile.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
