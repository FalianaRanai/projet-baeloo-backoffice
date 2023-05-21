import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App(props){

  const [APIUrl, setAPIUrl] = useState("http://localhost:4000");

    return (
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Login APIUrl={APIUrl} />}
            ></Route>
            <Route
              path="/register"
              element={<Register APIUrl={APIUrl} />}
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
