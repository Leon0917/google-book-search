import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Details from "./pages/Details";
// import NoMatch from "./pages/noMatch"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
