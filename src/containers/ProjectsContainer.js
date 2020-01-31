import React from 'react';
import '../styles/ProjectsContainer.css'

class ProjectsContainer extends React.Component {
    componentDidMount = () => {
        this.props.resetToggle()
    }

    render() {
        return(
            <div className={`projects-page ${this.props.opacity}`} onClick={this.props.resetToggle}>
                {/* <p className="page-title">
                    My Projects 
                </p> */}
                <div className="title">
                    My <br/> Projects
                </div>
                <div className="projects">
                    <h1>
                        Podcastr
                    </h1>
                    <img src={require('../images/podcastr/home.png')} alt="podcastr" />
                </div>
                <div className="projects">
                    <h1>
                        Workout Planner 
                    </h1>
                    <img src={require('../images/workout_planner/login.png')} alt="workout planner" />
                </div>
                <div className="projects">
                    <h1>
                        Weather App
                    </h1>
                    <img src={require('../images/weather_app/home.png')} alt="weather_app" />
                </div>
            </div>
        )
    }
}

export default ProjectsContainer