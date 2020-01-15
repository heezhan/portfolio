import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { Route } from 'react-router-dom';
import ProjectsContainer from './containers/ProjectsContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="default-styling">
      <Route exact path="/">
        <NavBar />
        <Homepage />
      </Route>
  
      <Route exact path="/projects">
        <ProjectsContainer />
      </Route>
    </div>
  );
}

export default App;
