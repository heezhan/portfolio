import React from 'react';
import '../styles/Homepage.css';
import Typed from 'typed.js';

class Homepage extends React.Component {
    componentDidMount() {
      const options = {
          strings: ["Hi, my name is Heejae. \nI am a full stack web developer."],
          typeSpeed: 100,
          startDelay: 50
      };
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
      this.typed.destroy();
    }

    render() {
        return (
            <div className="homepage">
                <div className="intro">
                    <span
                        style={{ whiteSpace: 'pre' }}
                        ref={(el) => { this.el = el; }}
                    />
                    <button>Projects</button>
                </div>
            </div>
            
            // <button onClick={() => this.typed.toggle()}>Toggle</button>
            // <button onClick={() => this.typed.start()}>Start</button>
            // <button onClick={() => this.typed.stop()}>Stop</button>
            // <button onClick={() => this.typed.reset()}>Reset</button>
            // <button onClick={() => this.typed.destroy()}>Destroy</button>
   
        )
    }
}

export default Homepage 
