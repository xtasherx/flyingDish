// CSS 
import './App.css';

// import react 
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Landing from "./Pages/Landing";
import Results from "./Pages/Results"

function App() {
  return (
    <>
        <BrowserRouter>
        <Switch>
            
            <Route exact path="/results" component={Results} />
            <Route path="/" component={Landing} />
          </Switch>

        </BrowserRouter> 

    </>
  );

}

export default App;
