import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { Route } from 'react-router-dom';
import ProjectsContainer from './containers/ProjectsContainer';
import NavBar from './components/NavBar';

class App extends React.Component {
  state = {
    active: "",
    opacity: ""
  }

  toggleSidebar = () => {
      console.log("hi")
      if (this.state.active === "active") {
          this.setState({
              active: "",
              opacity: ""
          })
      } else {
          this.setState({
              active: "active",
              opacity: "opacity"
          })
      }  
  }
  render() {
    return (
      <div className="default-styling">
        <Route exact path="/">
          <NavBar active={this.state.active} toggleSidebar={this.toggleSidebar}/>
          <Homepage opacity={this.state.opacity}/>
        </Route>
    
        <Route exact path="/projects">
          <ProjectsContainer />
        </Route>
      </div>
    );
  }
}

export default App;
