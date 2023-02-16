import "./App.css";
import Header from "./components/header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signUp";
import LogIn from "./components/logIn";
import Welcome from "./components/welcome";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/login" element={<LogIn />}>
            {" "}
          </Route>
          <Route path="/signup" element={<SignUp />}>
            {" "}
          </Route>
          <Route path="/welcome" element={<Welcome />}>
            {" "}
          </Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} />
        <p>Demo</p>
        <a
          className="App-link"
          href="https://tess.no/?gclid=Cj0KCQiAw8OeBhCeARIsAGxWtUyN_6tx1lSuoNgec3xXKcNlYtivw_vs9D1Way5LSvWFcNa9_eEcokMaAu3YEALw_wcB"
          target="_blank"
          rel="not"
        >
          Learn more about us
        </a>
      </header>
      */
