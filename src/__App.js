import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import DetailPage from "pages/DetailPage";
import Example from "../src/pages/Example";
import Checkout from "pages/Checkout";
import "../src/assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={LandingPage}></Route>
          <Route exact path="/properties/:id" Component={DetailPage}></Route>
          <Route path="/example" Component={Example}></Route>
          <Route path="/checkout" Component={Checkout}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
