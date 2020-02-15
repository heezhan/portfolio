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
                    <li onClick={this.props.resetToggle}>
                        <Link to={"/"} className="link">
                            Home
                        </Link>
                    </li>
                    <li onClick={this.props.resetToggle}>
                        <Link to={"/about"} className="link">
                            About
                        </Link>
                    </li>
                    <li onClick={this.props.resetToggle}>
                        <Link to={"/projects"} className="link">
                            Projects
                        </Link>
                    </li>
                    <li onClick={this.props.resetToggle}>
                        <Link to={"/resume"} className="link">
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar