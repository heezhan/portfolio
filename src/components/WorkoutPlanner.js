import React from 'react';
import '../styles/ProjectDetails.css';
import CarouselSlider from 'react-carousel-slider';

class WorkoutPlanner extends React.Component {
    // state = {
    //     images: [
    //         require('../images/workout_planner/login.png'),
    //         require('../images/workout_planner/home.png'),
    //         require('../images/workout_planner/exercise_detail.png'),
    //         require('../images/workout_planner/routines.png'),
    //         require('../images/workout_planner/routine_detail.png')
    //     ],
    //     currentIndex: 0
    // }

    // incrementIndex = () => {
    //     if (this.state.currentIndex === 4) {
    //         this.setState({
    //             currentIndex: 0
    //         })
    //     } else {
    //         this.setState({
    //             currentIndex: this.state.currentIndex + 1 
    //         })
    //     }
    // }

    // decrementIndex = () => {
    //     if (this.state.currentIndex === 0) {
    //         this.setState({
    //             currentIndex: 4
    //         })
    //     } else {
    //         this.setState({
    //             currentIndex: this.state.currentIndex - 1
    //         })
    //     }
    // }

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
                imgSrc: require('../images/workout_planner/exercise_details.png')
            },
            {
                des: "Routines page",
                imgSrc: require('../images/workout_planner/routines.png')
            },
            {
                des: "Routine details page",
                imgSrc: require('../images/workout_planner/routine_details.png')
            }
        ];
        
        return (
            <div className="container">
                <div className="carousel">
                    <CarouselSlider slideItems = {data} />
                </div>
                <div className="details">
                    <h1 className="project-title">Workout Planner</h1>
                    <h2>React | Ruby on Rails | Semantic UI</h2>
                    <h2>A web app with how-to workout videos to help users streamline their daily exercise routines</h2>
                    <h2>Used React Router so that the single page web app could emulate a more dynamic, multi-page interface. Incorporated methods such as Promise.all to work around the asynchronous nature of fetch calls. Constructed with JS React, Ruby on Rails, PostgreSQL DB and designed with Semantic UI and custom CSS</h2>
                </div>
            </div>
        )
        // return (
        //     <div className={`project-details ${this.props.opacity}`} onClick={this.props.resetToggle}>

        //         <p className="project-title">
        //             Workout Planner 
        //         </p>

        //         <div className="slider">
        //             <span>
        //                 <i className="fas fa-chevron-left" onClick={this.decrementIndex}/>
        //                     <img src={this.state.images[this.state.currentIndex]} alt="workout planner" />
        //                 <i className="fas fa-chevron-right" onClick={this.incrementIndex} />
        //             </span>
        //         </div>

        //     </div>
        // )
    }
}

export default WorkoutPlanner 
