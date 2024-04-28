import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Empleado from "./routes/Empleado";
import Solicitud from "./routes/solicitud";

ReactDOM.render(
  <Router history={BrowserRouter}>
    <Route path="routes/" component={Home}></Route>
    <Route path="routes/empleado" component={Empleado}></Route>
    <Route path="routes/solicitud" component={Solicitud}></Route>
  </Router>,
  document.getElementById("root")
);
