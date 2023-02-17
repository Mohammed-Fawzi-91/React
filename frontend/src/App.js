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
          <Route path="/components/welcome" element={<Welcome />} />
          <Route path="/components/logIn" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

  
    </React.Fragment>
  );
}

export default App;

