import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Merge from "./Routes/Merge";
import Home from "./Routes/Home"
import Split from "./Routes/Split";
import Unlock from "./Routes/Unlock";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/merge" exact element={<Merge />} />
        <Route path="/split" exact element={<Split />} />
        <Route path="/unlock" exact element={<Unlock />} />
      </Routes>
    </Router>
  );
};

export default App;
