import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
// import ProductList from "./components/ProductList/ProductList";
import routes from "./router";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <div className="container">
            <div className="row">{this.showContentMenu(routes)}</div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  showContentMenu(routes) {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;
