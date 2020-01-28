import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            // <div className="navbar">
            //     <span className="home">Home</span>
            //     <span className="about">About</span>
            //     <span className="projects">Projects</span>
            //     <span className="resume">Resume</span>
            // </div>

            <div id="sidebar" className={`${this.props.active}`}>
                <div className="toggle-btn" onClick={this.props.toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>
                        <Link to={"/projects"}>
                            Projects
                        </Link>
                    </li>
                    <li>Resume </li>
                </ul>
            </div>
        )
    }
}

export default NavBar