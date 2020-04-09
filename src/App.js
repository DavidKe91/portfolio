import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import About from "./pages/About/about";
import Post from "./pages/Post/post";
import NoMatch from "./pages/no-match";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/404" component={NoMatch} />
                <Route path="/:slug" component={Post} />
            </Switch>
        </Router>
    );
}

export default App;
