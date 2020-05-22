import React from 'react';

import './App.css';
import Navigation from './Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectArray from './Projects'

function App() {
  return (
    <Router>
    <Navigation></Navigation>
      <Switch>
      <Route exact path="/portfolio">
          About
      </Route>
      <Route exact path="/portfolio/projects">
          <ProjectCard projectArray= {ProjectArray}></ProjectCard>
      </Route>
      <Route exact path="/portfolio/resume">
          Resume
      </Route>
      <Route exact path="/portfolio/contact">
          Contact
      </Route>
    </Switch>
    </Router>


  );
}

export default App;
