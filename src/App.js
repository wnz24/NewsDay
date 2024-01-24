import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";

import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {

  const [progress, setProgress] = useState(0);




  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#ffffff" progress={setProgress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pagesize={10}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route exact path="/business" element={ <News setProgress={setProgress} key="business" pagesize={10} country="us" category="business" /> }> </Route>
          <Route exact path="/entertainment" element={ <News setProgress={setProgress} key="entertainment" pagesize={10} country="us" category="entertainment" /> } ></Route>
          <Route exact path="/general" element={ <News setProgress={setProgress} key="general" pagesize={10} country="us" category="general" /> } ></Route>
          
          <Route exact path="/health" element={ <News setProgress={setProgress} key="health" pagesize={10} country="us" category="health" /> } ></Route>
          <Route exact path="/science" element={ <News setProgress={setProgress} key="science" pagesize={10} country="us" category="science" /> } >  </Route>
          <Route exact path="/sports" element={ <News setProgress={setProgress} key="sports" pagesize={10} country="us" category="sports" /> } ></Route>
          <Route exact path="/technology" element={ <News setProgress={setProgress} key="technology" pagesize={10} country="us" category="technology" /> } ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App