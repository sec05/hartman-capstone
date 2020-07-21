import React from 'react';
import { Switch, Route, } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Sidebar from "./sidebar/sidebar";
import unknown from './404/404';
import title from './title';
import information from"./info";
function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
    <Route render={({location})=>(
      <TransitionGroup>
      <CSSTransition timeout={500} classNames="slide" key={location.key}>
        <Switch location={location}> 
          <Route path="/" exact component={title} />
          <Route path="/info" exact component={information} />
          <Route path="/" component={unknown} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>


    )}/>
      </div>
  );
}

export default App;
