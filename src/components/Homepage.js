import React from 'react';
import '../styles/Homepage.css';
import linkedin from '../images/linkedin.png';
import medium from '../images/medium.png';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    componentDidMount() {
        const name = "Heejae".fontcolor("#d9204f")
        const position = "full stack web developer".fontcolor("#d9204f")

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
                <div className="links">
                    <Link to="/projects">
                        <button>
                            Projects
                        </button>
                    </Link>
                    <div>
                        <img src={linkedin} />
                        <img src={medium} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage 
