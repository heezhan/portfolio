import React from 'react';
import '../styles/ProjectDetails.css';

class Podcastr extends React.Component {
    render() {
        return (
            <div className={`project-details ${this.props.opacity}`} onClick={this.props.resetToggle}>
                <p className="project-title">
                    Podcastr
                </p>

            </div>
        )
    }
}

export default Podcastr 
