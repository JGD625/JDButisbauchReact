import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
render() {
    return (
      <div className="home-container">
      <h2>My name is Julie,<br/>and I rather enjoy making <span className="teal"><Link to="/portfolio" className="teal">things</Link></span>.</h2> 
      </div>
    );
  }
}
  export default Home;
  