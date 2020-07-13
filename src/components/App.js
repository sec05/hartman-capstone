import React from 'react';
import {BrowserRouter,Switch,Route,} from "react-router-dom";
import title from "./title/title";
import unknown from "./404/404";
import information from "./sources/sources";
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={title}/>
    <Route path="/sources" exact component={information}/>
    <Route path="/" component={unknown}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
