import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Clients from "./clients";
import Products from "./products";

ReactDOM.render(
  <Router history={BrowserRouter}>
    <Route path="/" component={Home}></Route>
    <Route path="/clients" component={Clients}></Route>
    <Route path="/products" component={Products}></Route>
  </Router>,
  document.getElementById("root")
);
