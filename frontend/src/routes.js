
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register}  exact/>
        </Switch>
        </BrowserRouter>
    )
}