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
                            is a full stack web developer with a background in Marketing and PR. As a Media and Comm undergrad, she was always fascinated by social media and the digital space. She took an introductory computer science class as an elective, which sparked her interest in programming. Rather than being a passive user of digital platforms, she really wanted to partake in the process of cultivating the digital landscape. She is proficient in Ruby on Rails, JavaScript and React/ Redux. She excited for what the synergy between her logical and creative side can produce.
                        </h2>
                
                        <h3>
                            Ruby on Rails, JavaScript, React, Redux, MVC, RESTful Routes, APIs, SQL, PostgreSQL, RSpec, Capybara, HTML5, CSS, and Agile Methodologies
                        </h3>
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