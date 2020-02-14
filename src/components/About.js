import React from 'react';
import '../styles/About.css';
import Typed from 'typed.js';

class About extends React.Component {
    componentDidMount = () => {
        this.props.resetToggle()

        const name = "Hi, it's me again!".fontcolor("#cfef59")

        const options = {
            strings: [`${name}`],
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
        return(
            <div className={`about-style ${this.props.opacity}`} onClick={this.props.resetToggle}>
                <div className="about-page">
                    <div className="me">
                        <div className="name">
                            <span 
                                style={{ whiteSpace: 'pre' }}
                                ref={(el) => { this.el = el; }}
                            />
                        </div>
                    </div>
                    <div className="about">
                        <img id="me" src={require('../images/itme.jpeg')}/>
                        <h2>
                            <span id="subtitle">My story</span>
                            <br/>
                            <br/>
                            I am a full stack web developer with a background in Marketing and PR. As a Media and Comm undergrad, I was always fascinated by social media and the digital space. I took an introductory computer science class as an elective, which sparked my interest in programming. Rather than being a passive user of digital platforms, I really wanted to partake in the process of cultivating the digital landscape. I am proficient in Ruby on Rails, JavaScript and React/ Redux. I am excited for what the synergy between my logical and creative side can produce!
                            <br/>
                            <br/>
                            <span id="subtitle-2">technical skills...</span>
                            <span id="skills">Ruby on Rails, JavaScript, React, Redux, MVC, RESTful Routes, APIs, SQL, PostgreSQL, RSpec, Capybara, HTML5, CSS, and Agile Methodologies</span>
                        </h2>
                    </div>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/heejae-han/">
                            <i className="fab fa-linkedin about-icons"/>
                        </a>
    
                        <a href="https://github.com/heezhan">
                            <i className="fab fa-github-square about-icons" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About