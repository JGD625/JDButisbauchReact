import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './Navigation.css'

class Navigation extends Component {
  render(){

  return (
<section>
    <div className="standard-navigation">
    <Link to="/about"><button className="btn"  style={{outline: 'none'}}>ABOUT</button></Link>
    <Link to="/portfolio"><button className="btn"  style={{outline: 'none'}}>PORTFOLIO</button></Link>
    <Link to="/resume"><button className="btn"  style={{outline: 'none'}} >RESUME</button></Link>
    <Link to="/contact"><button className="btn"  style={{outline: 'none'}}>CONTACT</button></Link>
  </div>
  <div className="mobile-navigation">
   <Menu  right disableAutoFocus>
   <a id="home" className="menu-item" href="/">HOME</a>
   <a id="about" className="menu-item" href="/about" >ABOUT</a>
   <a id="portfolio" className="menu-item" href="/portfolio" >PORTFOLIO</a>
   <a id="resume" className="menu-item" href='/resume'  >RESUME</a>
   <a id="contact" className="menu-item" href="/contact" >CONTACT</a>
 </Menu>
 </div>
 </section>
  );
}
}

export default Navigation;
