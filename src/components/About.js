import React from 'react';
import '../styles/About.css'

class About extends React.Component {
    componentDidMount = () => {
        this.props.resetToggle()
    }

    render() {
        return(
            <div className={`about-page ${this.props.opacity}`} onClick={this.props.resetToggle}>
                <div className="about">
                    <h2>
                        <span className="emphasis">Heejae Han</span> is a full stack web developer with a background in Marketing and PR. As a Media and Comm undergrad, she was always fascinated by social media and the digital space. She took an introductory computer science class as an elective, which sparked her interest in programming. Rather than being a passive user of digital platforms, she really wanted to partake in the process of cultivating the digital landscape. She is proficient in Ruby on Rails, JavaScript and React/ Redux. She excited for what the synergy between her logical and creative side can produce.
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
        )
    }
}

export default About