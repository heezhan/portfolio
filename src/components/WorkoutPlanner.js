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
    componentDidMount = () => {
        this.props.resetToggle()
    }

    render() {
        let data = [
            {
                des: "The main page prompts you to log in or create an account",
                imgSrc: require('../images/workout_planner/home.png')
            },
            {
                des: "After logging in, you will be directed to your page with all your routines",
                imgSrc: require('../images/workout_planner/loggedin.png')
            },
            {
                des: "When you click on a specific routine, you will be able to see all the videos you've added to that routine",
                imgSrc: require('../images/workout_planner/routine.png')
            },
            {
                des: 'By clicking on "Show Details", you will be able to see more information about the exercise as well a bigger video',
                imgSrc: require('../images/workout_planner/exercise_details.png')
            },
            {
                des: "Your home page will feature all the exercise videos that are available for you to incorporate into your routine",
                imgSrc: require('../images/workout_planner/exercises.png')
            }
        ];

        let sliderBoxStyle = {
            background: "transparent",
            height: "480px",
            width: "700px"
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
                        Workout Planner
                        <br/>
                        <span id="tech">React | Ruby on Rails | Semantic UI</span>
                    </h1>
                    <h2 id="descrip">
                        A web app with how-to workout videos to help users streamline their daily exercise routines
                    </h2>
                    <h2 id="bullet-points">
                        Made use of state, props and controlled forms for a more seamless user experience and cleaner code <br/>
                        Used React Router so that the single page web app could emulate a more dynamic, multi-page interface <br/>
                        Incorporated methods such as Promise.all to work around the asynchronous nature of fetch calls <br/>
                        Constructed with JS React, Ruby on Rails, PostgreSQL DB and designed with Semantic UI and custom CSS
                    </h2>
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
