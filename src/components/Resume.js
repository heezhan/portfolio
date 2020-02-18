import React from 'react';
import '../styles/Resume.css';

class Resume extends React.Component {
    render() {
        return (
            <div className={`resume-page ${this.props.opacity}`} onClick={this.props.resetToggle}>
                <div className="resume-page-details">
                    <h1 id="resume-page-title">Say hi!</h1>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/heejae-han/">
                            <i className="fab fa-linkedin home-icons" />
                        </a>
                        <a href="https://github.com/heezhan">
                            <i className="fab fa-github-square home-icons" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume