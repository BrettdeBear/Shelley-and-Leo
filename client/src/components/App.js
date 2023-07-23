import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Contact from "./Contact";
import Home from "./Home";
import PayPrice from "./PayPrice";
import "../index.css";



function App({element}) {


  return(
    <>
      {/* <h1 className="cool">Hello, folks!</h1> */}
      <img className="headerPic" src="https://github.com/BrettdeBear/Shelley-and-Leo/blob/main/IMG-9158.jpg?raw=true" />
      <p className="header">I'm Michelle, and I offer dog sitting in a home setting. With me, your dog will receive daily walks and enrichment, and even some play time with my own dog, a friendly 45 pound mix named Leo. We are located in Northville, MI.</p>
      <Nav element={element}/>
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
