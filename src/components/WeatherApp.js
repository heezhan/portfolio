import React from 'react';
import '../styles/ProjectDetails.css';

class WeatherApp extends React.Component {
    render() {
        return (
            <div className={`project-page ${this.props.opacity}`} onClick={this.props.resetToggle}>
                <p className="project-title">
                    Weather App
                </p>

            </div>
        )
    }
}

export default WeatherApp 
