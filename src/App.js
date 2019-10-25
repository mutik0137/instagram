import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Profile from "./components/Profile/Profile";


function App() {      

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Feed} />
        <Route exact path="/Profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App; 
