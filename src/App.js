import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Merge from "./component/Merge";
import Home from "./component/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/merge" exact element={<Merge />} />

      </Routes>
    </Router>
  );
};

export default App;
