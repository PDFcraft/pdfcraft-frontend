import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Merge from "./Routes/Merge";
import Home from "./Routes/Home"
import Split from "./Routes/Split";
import Unlock from "./Routes/Unlock";
import Wip from "./Routes/Wip";
import Topdf from "./Routes/Topdf";
import Protect from "./Routes/Protect";
import Rotate from "./Routes/Rotate";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./GloblaStyles";
import Explain from "./Routes/Explain";

function App() {
  return (
    <RecoilRoot>
      <>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" exact element={<Explain />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/merge" exact element={<Merge />} />
            <Route path="/split" exact element={<Split />} />
            <Route path="/rotate" exact element={<Rotate />} />
            <Route path="/topdf" exact element={<Topdf />} />
            <Route path="/unlock" exact element={<Unlock />} />
            <Route path="/protect" exact element={<Protect />} />
            <Route path="/tojpg" exact element={<Wip />} />
            <Route path="/watermark" exact element={<Wip />} />
            
            
            
            
          </Routes>
        </Router>
      </>
    </RecoilRoot>
  );
};

export default App;
