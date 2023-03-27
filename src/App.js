import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import "../src/assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
