import React from 'react';
import '../styles/NavBar.css'

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <span className="home">Home</span>
                <span>About Me</span>
                <span>Projects</span>
                <span>Resume</span>
            </div>
        )
    }
}

export default NavBar