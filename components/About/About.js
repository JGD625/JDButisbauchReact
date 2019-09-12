import React, {Component} from 'react';
import './About.css'

class About extends Component {
render() {
    return (
      <div className="about-container">
            <div className="about-p-container">
            <p>I enjoy watching ideas come to life, solving riddles, and studying languages. 
              My favorite questions are “How?”, and “Why?”. I have a strong sense of design, and enjoy 
              translating a concept into a working experience. I speak several programming languages, 
              native English, passable Japanese and terribly poor Swedish.  I currently live in Atlanta.
              </p>
            <p>
              When I’m away from my desk, I enjoy creating art, reading, hiking, and playing video games.
              Not to show my age, but I love a classic side scroller. I have lived on two continents, two coasts, 
              and am always down for live music and local food. I love adventure.
              </p>
              </div>
              <span className="section1-greeting">It's a pleasure to meet you.</span>
      </div>
    );
  }
}
  export default About;
  