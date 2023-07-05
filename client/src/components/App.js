import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Contact from "./Contact";
import Home from "./Home";
import PayPrice from "./PayPrice";
import "../index.css";


function App() {
  return(
    <>
      {/* <h1 className="cool">Hello, folks!</h1> */}
      <img className="headerPic" src="https://github.com/BrettdeBear/Shelley-and-Leo/blob/main/IMG-9158.jpg?raw=true" />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pricing'>
          <PayPrice />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </>
  )
}

export default App;
