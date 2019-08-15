import React from "react";
import Navbar from "./components/layout/Navbar";
import Main from "./components/pages/Main"
import "./css/main.css";
import State from './context/State'

function App() {
  return (
    <State>
        <div className="container">
          <Main />
          <Navbar />
        </div>
    </State>
  );
}

export default App;