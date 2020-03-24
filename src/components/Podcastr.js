import React from 'react';
import '../styles/ProjectDetails.css';
import CarouselSlider from 'react-carousel-slider';

class Podcastr extends React.Component {
    componentDidMount = () => {
        this.props.resetToggle()
    }
    
    render() {
        let data = [
            {
                des: "Homepage",
                imgSrc: require('../images/podcastr/home.png')
            },
            {
                des: "Log in or create an account",
                imgSrc: require('../images/podcastr/login.png')
            },
            {
                des: "Search by podcast",
                imgSrc: require('../images/podcastr/podcasts.png')
            },
            {
                des: "When you click on a podcast, all the episodes and their descriptions will be shown",
                imgSrc: require('../images/podcastr/podcast_details.png')
            },
            {
                des: "Instead of searching by podcast, you have the option to search for episodes",
                imgSrc: require('../images/podcastr/episodes.png')
            },
            {
                des: "When you click on an episode, you can play the episode as well as add it to your playlist",
                imgSrc: require('../images/podcastr/episode_details.png')
            },
            {
                des: "You can add to or remove from any of your existing playlists or just create a new playlist on the spot",
                imgSrc: require('../images/podcastr/episode_playlists.png')
            },
            {
                des: 'You can see a list of all your playlists by clicking on "My Playlists" in the navigation bar',
                imgSrc: require('../images/podcastr/playlists.png')
            },
            {
                des: "You can edit the name of a playlist",
                imgSrc: require('../images/podcastr/playlist_edit.png')
            },
            {
                des: "You can delete a playlist",
                imgSrc: require('../images/podcastr/playlist_delete.png')
            }
        ];

        let sliderBoxStyle = {
            background: "transparent",
            height: "480px",
            width: "800px"
        };

        let textBoxStyle = {
            top: "105%",
            width: "95%",
            background: "transparent"
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
                        Podcastr
                        <br/>
                        <span id="tech">Redux | Ruby on Rails | Semantic UI</span>
                    </h1>
                    <h2 id="descrip">
                        A podcast web app where users can browse and listen to podcasts as well as curate their own playlists
                    </h2>
                    <h2 id="bullet-points">
                        Integrated Listen Notes API in the back-end to render podcasts and their episodes based on user query <br/>
                        Imported a package called React HTML Parser to convert standard HTML elements into their React counterparts <br/> 
                        Utilized key frames to have a moving gradient as a background <br/> 
                        Built with JS Redux, Ruby on Rails, PostgreSQL DB and styled with Semantic UI React and custom CSS
                    </h2>
                </div>
            </div>
        )
    }
}

export default Podcastr 
