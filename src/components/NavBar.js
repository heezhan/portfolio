import React from 'react';
import '../styles/NavBar.css'

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <span className="home">Home</span>
                <span className="about">About</span>
                <span className="projects">Projects</span>
                <span className="resume">Resume</span>
            </div>
        )
    }
}

export default NavBar