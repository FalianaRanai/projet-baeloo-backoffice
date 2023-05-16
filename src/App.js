import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      APIUrl: "http://localhost:4000",
    };
  }
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Login APIUrl={this.state.APIUrl} />}
            ></Route>
            <Route
              path="/register"
              element={<Register APIUrl={this.state.APIUrl} />}
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
