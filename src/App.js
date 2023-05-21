import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App(props){

  const [APIUrl, setAPIUrl] = useState("http://localhost:4000");

  const [Admin, setAdmin] = useState({});

    return (
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Login APIUrl={APIUrl} Admin={Admin} setAdmin={setAdmin} />}
            ></Route>
            <Route
              path="/register"
              element={<Register APIUrl={APIUrl} Admin={Admin} />}
            ></Route>
            <Route path="/dashboard" element={<Dashboard APIUrl={APIUrl} Admin={Admin}/>}></Route>
          </Routes>
        </Router>
      </>
    );
  }
