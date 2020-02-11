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
                des: "Homepage",
                imgSrc: require('../images/workout_planner/login.png')
            },
            {
                des: "2",
                imgSrc: require('../images/workout_planner/home.png')
            }
        ];
        
        return (
            <div className="container">
                <div className="carousel">
                    <CarouselSlider slideItems = {data} />
                </div>
                <div className="details">
                    <p>Workout Planner</p>
                    <p>React, Ruby on Rails, Semantic UI</p>
                    <p></p>
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
