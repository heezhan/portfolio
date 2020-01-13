import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { Route } from 'react-router-dom';
import ProjectsContainer from './containers/ProjectsContainer';

function App() {
  return (
    <div>
      <Route exact path="/">
        <Homepage />
      </Route>
  
      <Route exact path="/projects">
        <ProjectsContainer />
      </Route>
    </div>
  );
}

export default App;
