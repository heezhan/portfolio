import React from 'react';
import '../styles/ProjectsContainer.css'

class ProjectsContainer extends React.Component {
    componentDidMount = () => {
        this.props.resetToggle()
    }

    render() {
        return(
            <div className={`projects-page ${this.props.opacity}`}>
                <p className="page-title">
                    My Projects 
                </p>
            </div>
        )
    }
}

export default ProjectsContainer