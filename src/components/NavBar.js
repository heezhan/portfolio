import React from 'react';
import '../styles/NavBar.css'

class NavBar extends React.Component {
    state = {
        open: false 
    }

    toggleMenu = () => {
        
    }

    render() {
        return (
            <div className="navbar">
                <span className="home">Home</span>
                <span className="about">About</span>
                <span className="projects">Projects</span>
                <span className="resume" onClick={toggleMenu}>
                    <i class="fas fa-bars"></i>
                </span>
            </div>
        )
    }
}

export default NavBar