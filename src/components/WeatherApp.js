import React from 'react';
import '../styles/ProjectDetails.css';
import CarouselSlider from 'react-carousel-slider';

class WeatherApp extends React.Component {
    componentDidMount = () => {
        this.props.resetToggle()
    }

    render() {
        let data = [
            {
                des: "Homepage",
                imgSrc: require('../images/weather_app/home.png')
            },
            {
                des: "Logged in page",
                imgSrc: require('../images/weather_app/login.png')
            },
            {
                des: "Favorite a city",
                imgSrc: require('../images/weather_app/favorite.png')
            }
        ];
        
        return (
            <div className={`container ${this.props.opacity}`} onClick={this.props.resetToggle}>
                <div className="carousel">
                    <CarouselSlider slideItems = {data} />
                </div>
                <div className="details">
                    <h1 className="project-title">Weather App</h1>
                    <h2>JavaScript | Ruby on Rails</h2>
                    <h2>A live weather forecast web app where users can create their list of favorite cities</h2>
                    <h2>Integrated HTML5 Geolocation API and Metaweather API to render the user’s local weather. Serialized data from the back-end in order to give the front-end access to Active Record Associations. Made fetch calls to the API from the back-end to resolve CORS issues. Developed with a JavaScript front-end and a Ruby on Rails backend</h2>
                </div>
            </div>
        )
    }
}

export default WeatherApp 
