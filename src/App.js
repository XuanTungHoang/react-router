import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Menu/>
          <Switch>
            {this.showAllRoute(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showAllRoute = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((item, index) => {
        return (
          <Route key={index} path={item.path} exact={item.exact}  component={item.component} />
        )
      });
    }
    return result;
  }
}

export default App;
