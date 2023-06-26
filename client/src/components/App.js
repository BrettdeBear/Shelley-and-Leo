import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Contact from "./Contact";
import Home from "./Home";
import PayPrice from "./PayPrice";


function App() {
  // Code goes here!
  return(
    <>
      <h1>Hello, folks!</h1>
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
