import React from "react";
import "../src/css/App.css";

import Home from "./components/home";
import AboutPage from "./pages/AboutPage";
import AboutShuffles from "./pages/AboutShuffles";
import Users from "./components/users";
import NoMatch from "./components/noMatch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shuffles from "./components/shuffles";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/shuffles">Shuffles</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/shuffles">
            <AboutShuffles />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
