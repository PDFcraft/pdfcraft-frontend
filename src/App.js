import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Merge from "./Routes/Merge";
import Home from "./Routes/Home"
import Split from "./Routes/Split";
import Unlock from "./Routes/Unlock";
import Esign from "./Routes/Esign";
import Topdf from "./Routes/Topdf";
import Tojpg from "./Routes/Tojpg";
import Protect from "./Routes/Protect";
import Rotate from "./Routes/Rotate";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./GloblaStyles";

function App() {
  return (
    <RecoilRoot>
      <>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/merge" exact element={<Merge />} />
            <Route path="/split" exact element={<Split />} />
            <Route path="/unlock" exact element={<Unlock />} />
            <Route path="/esign" exact element={<Esign />} />
            <Route path="/topdf" exact element={<Topdf />} />
            <Route path="/tojpg" exact element={<Tojpg />} />
            <Route path="/protect" exact element={<Protect />} />
            <Route path="/rotate" exact element={<Rotate />} />
          </Routes>
        </Router>
      </>

    </RecoilRoot>

  );
};

export default App;
