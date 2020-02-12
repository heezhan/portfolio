import React from 'react';
import '../styles/ProjectDetails.css';

class Podcastr extends React.Component {
    render() {
        let data = [
            {
                des: "Homepage/ Log In page",
                imgSrc: require('../images/workout_planner/login.png')
            },
            {
                des: "Main page after log in",
                imgSrc: require('../images/workout_planner/home.png')
            },
            {
                des: "Exercise details page",
                imgSrc: require('../images/workout_planner/exercise_detail.png')
            },
            {
                des: "Routines page",
                imgSrc: require('../images/workout_planner/routines.png')
            },
            {
                des: "Routine details page",
                imgSrc: require('../images/workout_planner/routine_detail.png')
            }
        ];
        
        return (
            <div className="container">
                <div className="carousel">
                    <CarouselSlider slideItems = {data} />
                </div>
                <div className="details">
                    <h1 className="project-title">Podcastr</h1>
                    <h2>React | Ruby on Rails | Semantic UI</h2>
                    <h2>A web app with how-to workout videos to help users streamline their daily exercise routines</h2>
                    <h2>Used React Router so that the single page web app could emulate a more dynamic, multi-page interface. Incorporated methods such as Promise.all to work around the asynchronous nature of fetch calls. Constructed with JS React, Ruby on Rails, PostgreSQL DB and designed with Semantic UI and custom CSS</h2>
                </div>
            </div>
        )
    }
}

export default Podcastr 
