import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Merge from "./component/Merge";
import Home from "./component/Home"
<<<<<<< HEAD
import Split from "./component/Split"
=======
import Split from "./component/Split";
>>>>>>> 9b4f98bfc3e7bec8c65eba9ee09e7b5fecebb652

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/merge" exact element={<Merge />} />
        <Route path="/split" exact element={<Split />} />

      </Routes>
    </Router>
  );
};

export default App;
