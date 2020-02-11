import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectsContainer.css';

class ProjectsContainer extends React.Component {
    componentDidMount = () => {
        this.props.resetToggle()
    }

    render() {
        return(
            <div className={`projects-page ${this.props.opacity}`} onClick={this.props.resetToggle}>
                {/* <div className="title">
                    My <br/> Projects
                </div> */}
                
                <div className="project-card">
                    <h1>
                        <Link to="/projects/podcastr" className="project-links">
                            Podcastr
                        </Link>
                    </h1>
                    <img src={require('../images/podcastr/home.png')} alt="podcastr" />
                </div>
                
                <div className="project-card">
                    <h1>
                        <Link to="/projects/workoutplanner" className="project-links">
                            Workout Planner 
                        </Link>
                    </h1>
                    <img src={require('../images/workout_planner/login.png')} alt="workout planner" />
                </div>

                <div className="project-card">
                    <h1>
                        <Link to="/projects/weatherapp" className="project-links">
                                Weather App
                        </Link>
                    </h1>
                    <img src={require('../images/weather_app/home.png')} alt="weather_app" />
                </div>
            </div>
        )
    }
}

export default ProjectsContainer