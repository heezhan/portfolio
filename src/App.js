import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { Route } from 'react-router-dom';
import ProjectsContainer from './containers/ProjectsContainer';
import NavBar from './components/NavBar';
import About from './components/About';
import Podcastr from './components/Podcastr';
import WeatherApp from './components/WeatherApp';
import WorkoutPlanner from './components/WorkoutPlanner';

class App extends React.Component {
  state = {
    active: "",
    opacity: ""
  }

  toggleSidebar = () => {
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

  resetToggle = () => {
    this.setState({
      active: "",
      opacity: ""
    })
  }

  render() {
    return (
      <div className="default-styling">
        <NavBar active={this.state.active} toggleSidebar={this.toggleSidebar} resetToggle={this.resetToggle}/>

        <Route exact path="/">
          <Homepage opacity={this.state.opacity} resetToggle={this.resetToggle}/>
        </Route>

        <Route exaxct path="/about">
          <About opacity={this.state.opacity} resetToggle={this.resetToggle}/>
        </Route>
    
        <Route exact path="/projects">
          <ProjectsContainer opacity={this.state.opacity} resetToggle={this.resetToggle}/>
        </Route>

        <Route exact path="/projects/podcastr">
          <Podcastr opacity={this.state.opacity} resetToggle={this.resetToggle} />
        </Route>

        <Route exact path="/projects/workoutplanner">
          <WorkoutPlanner opacity={this.state.opacity} resetToggle={this.resetToggle} />
        </Route>

        <Route exact path="/projects/weatherapp">
          <WeatherApp opacity={this.state.opacity} resetToggle={this.resetToggle} />
        </Route>
      </div>
    );
  }
}

export default App;
