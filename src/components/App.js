import React from 'react';
import { Switch, Route,} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Sidebar from "./sidebar/sidebar";
import unknown from './404';
import title from './title';
import Intro from "./Intro";
import Claim1 from "./claim1";
import Claim2 from "./claim2";
import Claim3 from "./claim3";
import End from "./end"
function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <a className="github" href="https://github.com/sec05/hartman-capstone"> <i className="fa fa-github fa-2x" ></i></a>
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition timeout={500} classNames="slide" key={location.key}>
            <Switch location={location}>
              <Route path="/" exact component={title} />
              <Route path="/intro" exact component={Intro} />
              <Route path="/claim1" exact component={Claim1} />
              <Route path="/claim2" exact component={Claim2} />
              <Route path="/claim3" exact component={Claim3} />
              <Route path="/end" exact component={End} />
              <Route path="/" component={unknown} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>


      )} />
    </div>
  );
}

export default App;
