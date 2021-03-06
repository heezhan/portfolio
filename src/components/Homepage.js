import React from 'react';
import '../styles/Homepage.css';
import Typed from 'typed.js';

class Homepage extends React.Component {
    componentDidMount() {
        this.props.resetToggle()

        const name = "Heejae".fontcolor("#cfef59")
        const developer = "full stack web developer".fontcolor("#cfef59")
        const optimist = "optimist".fontcolor("#cfef59")
        const collaborator = "collaborator".fontcolor("#cfef59")

        // , `Hi, my name is ${name}. \nI am an ${optimist}.`, `Hi, my name is ${name}. \nI am a ${collaborator}.

        const options = {
            strings: [`Hi, my name is ${name}. \nI am a ${developer}.`],
            // smartBackspace: true,
            typeSpeed: 100,
            startDelay: 50,
            // backSpeed: 50,
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
            <div className={`homepage ${this.props.opacity}`} onClick={this.props.resetToggle}>
                <div className="intro">
                    <span 
                        style={{ whiteSpace: 'pre' }}
                        ref={(el) => { this.el = el; }}
                    />
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/heejae-han/">
                        <i className="fab fa-linkedin home-icons" />
                    </a>
                    <a href="https://github.com/heezhan">
                        <i className="fab fa-github-square home-icons" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Homepage 
