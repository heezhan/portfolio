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
                des: "Login page",
                imgSrc: require('../images/podcastr/login.png')
            },
            {
                des: "Search by podcast",
                imgSrc: require('../images/podcastr/podcasts.png')
            },
            {
                des: "Podcast details page",
                imgSrc: require('../images/podcastr/podcast_details.png')
            },
            {
                des: "Search by episode",
                imgSrc: require('../images/podcastr/episodes.png')
            },
            {
                des: "Episode details page",
                imgSrc: require('../images/podcastr/episode_details.png')
            },
            {
                des: "Add to or remove from playlists",
                imgSrc: require('../images/podcastr/episode_playlists.png')
            },
            {
                des: "Playlists page",
                imgSrc: require('../images/podcastr/playlists.png')
            },
            {
                des: "Edit playlist",
                imgSrc: require('../images/podcastr/playlist_edit.png')
            },
            {
                des: "Delete playlist",
                imgSrc: require('../images/podcastr/playlist_delete.png')
            }
        ];
        
        return (
            <div className={`container ${this.props.opacity}`} onClick={this.props.resetToggle}>
                <div className="carousel">
                    <CarouselSlider slideItems={data} />
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
