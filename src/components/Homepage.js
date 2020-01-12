import React from 'react';
import '../styles/Homepage.css';

class Homepage extends React.Component {
    handleScroll = (event) => {
        let element = event.target 
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            console.log('hey')
        } 
    }

    render() {
        return (
            <div className="homepage" onScroll={this.handleScroll}>
                <div className="intro">
                    Hi, my name is Heejae. I am a full stack web developer in D.C.
                </div>
            </div>
        )
    }
}

export default Homepage 