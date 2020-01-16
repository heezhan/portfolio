import React from 'react';
import '../styles/Homepage.css';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    componentDidMount() {
        const name = "Heejae".fontcolor("#E85A4F")
        const position = "full stack web developer".fontcolor("#E85A4F")

        const options = {
            strings: [`Hi, my name is ${name}. \nI am a ${position}.`],
            typeSpeed: 100,
            startDelay: 50,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true
        };
        this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <div className="homepage">
                <div className="intro">
                    <span 
                        style={{ whiteSpace: 'pre' }}
                        ref={(el) => { this.el = el; }}
                    />
                </div>
                <div className="projects-button">
                    <Link to="/projects">
                        <button>
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
   
        )
    }
}

export default Homepage 
