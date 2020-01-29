import React from 'react';
import '../styles/About.css'

class About extends React.Component {
    componentDidMount = () => {
        this.props.resetToggle()
    }

    render() {
        return(
            <div className={`about-page ${this.props.opacity}`}>
                <div className="about">
                    <h2>
                    <span className="emphasis">Heejae Han </span>is a full stack web developer with a background in Marketing and PR. As a Media and Comm undergrad, she was always fascinated by social media and the digital space. She took an introductory computer science class as an elective, which sparked her interest in programming. Rather than being a passive user of digital platforms, she really wanted to partake in the process of cultivating the digital landscape. She is proficient in Ruby on Rails, JavaScript and React/ Redux. She excited for what the synergy between her logical and creative side can produce.
                    </h2>

                    <h3>
                    Ruby on Rails, MVC Software Architecture, RESTful routes, SQL and PostgreSQL, test-writing frameworks such as RSpec and Capybara, Javascript, React, Redux, HTML, CSS, and Agile methodologies
                    </h3>

                    <div className="socials">
                    <a href="https://www.linkedin.com/in/heejae-han/">
                        <i class="fab fa-linkedin" />
                    </a>
                    <a href="https://github.com/heezhan">
                        <i class="fab fa-github-square" />
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About