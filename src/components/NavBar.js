import React from 'react';
import '../styles/NavBar.css'

class NavBar extends React.Component {
    state = {
        active: ""
    }

    toggleSidebar = () => {
        console.log("hi")
        if (this.state.active === "active") {
            this.setState({
                active: ""
            })
        } else {
            this.setState({
                active: "active"
            })
        }  
    }

    render() {
        return (
            // <div className="navbar">
            //     <span className="home">Home</span>
            //     <span className="about">About</span>
            //     <span className="projects">Projects</span>
            //     <span className="resume">Resume</span>
            // </div>

            <div id="sidebar" className={`${this.state.active}`}>
                <div className="toggle-btn" onClick={this.toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Resume </li>
                </ul>
            </div>
        )
    }
}

export default NavBar