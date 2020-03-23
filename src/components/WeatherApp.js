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

        let sliderBoxStyle = {
            background: "transparent",
            height: "480px",
            width: "700px"
        };

        let textBoxStyle = {
            top: "110%",
            width: "60%"
        };

        let buttonSetting = {
            placeOn: "middle-inside",
            style: {
              left: {
                color: "white",
                background: "transparent",
                border: "2px solid #e1e4e8",
                borderRadius: "50%"
              },
              right: {
                color: "white",
                background: "transparent",
                border: "2px solid #e1e4e8",
                borderRadius: "50%"
              }
            }
        };

        let customSlideCpnts = data.map((item, index) => (
            <div>
                <img src={item.imgSrc} />
                <p style={textBoxStyle}>{item.des}</p>
            </div>
        ));
        
        return (
            <div className={`container ${this.props.opacity}`} onClick={this.props.resetToggle}>
                <div className="carousel">
                    <CarouselSlider 
                        slideCpnts={customSlideCpnts} 
                        sliderBoxStyle={sliderBoxStyle}
                        buttonSetting={buttonSetting}
                    />
                </div>
                <div className="details">
                    <h1 className="project-title">
                        Weather App <br/>
                        <span id="tech">JavaScript | Ruby on Rails</span>
                    </h1>
                    <h2 id="descrip">
                        A live weather forecast web app where users can create their list of favorite cities
                    </h2>
                    <h2 id="bullet-points">
                        Integrated HTML5 Geolocation API and Metaweather API to render the user’s local weather <br/>
                        Serialized data from the back-end in order to give the front-end access to Active Record Associations <br/>
                        Made fetch calls to the API from the back-end to resolve CORS issues <br/>
                        Developed with a JavaScript front-end and a Ruby on Rails backend
                    </h2>
                </div>
            </div>
        )
    }
}

export default WeatherApp 
