import React, {Component} from 'react';
import './Portfolio.css'
import Modal from 'react-responsive-modal';
import K911IMG from '../../images/K911App.png'
import CQIMG from '../../images/CoffeeQuizApp.png'
import SPACEXIMG from '../../images/SpaceXApp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {faJsSquare} from '@fortawesome/free-brands-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import {faNodeJs} from '@fortawesome/free-brands-svg-icons'





export default class Portfolio extends Component {
    state = {
        open: false,
        bigPicSrc: '',
        mobilePicSrc: ''
      };
     
      onOpenModalOne = () => {
        this.setState({ 
            open: true,
            bigPicSrc: 'https://static.wixstatic.com/media/d9f074_afd0b68cf41b4d84b57f343237e3b375~mv2.png/v1/fill/w_800,h_580/K911Screen.png',
            mobilePicSrc: 'https://static.wixstatic.com/media/d9f074_9ac2a7f8c11e47aa828c9df03e37e0b4~mv2.png/v1/fill/w_360,h_600/K911MobileScreen.png'
         });
      };

      onOpenModalTwo = () => {
        this.setState({ 
            open: true,
            bigPicSrc: 'https://static.wixstatic.com/media/d9f074_635ccb2386e7402bac57da3b0a7d1c3b~mv2.png/v1/fill/w_800,h_579/SpaceXScreen.png',
            mobilePicSrc: 'https://static.wixstatic.com/media/d9f074_b27c1f8222d14d9b984f6beefa95abf2~mv2.png/v1/fill/w_360,h_600/SpaceXMobileScreen.png'
         });
      };

      onOpenModalThree = () => {
        this.setState({ 
            open: true,
            bigPicSrc: 'https://static.wixstatic.com/media/d9f074_c146ea6a14244b7dba8f4fcf8b6da4a6~mv2.png/v1/fill/w_801,h_580/CoffeeQuizScreen.png',
            mobilePicSrc: 'https://static.wixstatic.com/media/d9f074_a58f36f524834e7f80b4093c6c987806~mv2.png/v1/fill/w_360,h_600/CoffeeQuizMobileScreen.png'
         });
      };

     
      onCloseModal = () => {
        this.setState({ open: false,
            bigPicSrc: '',
            mobilePicSrc: '' });
      };

render() {
    const { open } = this.state;
    const bg = {
        modal: {
            background: "#282c34"
          },
          closeIcon: {
            background: "#40af93"
          }

      };

    return (

      <div className="portfolio-container">
      <div className="fixed-wrapper">
        <span className="section2-greeting">Look what I can do</span><span className="arrow">&#10552;</span>
        <div className="portfolio-items-container">
            <div className="k911-container details-card">
                <img src={K911IMG} className="portfolio-img" alt="K911 App"/>   
                <div className="portfolio-details">
                    <span className="app-name">K-911</span>
                    <p>Full-stack React application for dog owners. Research toxins, find a local vet, and learn first aid.</p>
                    <div className="tech-icons">
                        <FontAwesomeIcon icon={faReact} className="tech-icon"/><FontAwesomeIcon icon={faNodeJs} className="tech-icon"/><FontAwesomeIcon icon={faJsSquare} className="tech-icon"/><FontAwesomeIcon icon={faHtml5} className="tech-icon"/><FontAwesomeIcon icon={faCss3} className="tech-icon"/>
                        </div> 
                    <span class="portfolio_links">
                        <a href="http://k911.now.sh" style={{ textDecoration: 'none'}} target="_blank" rel='noopener noreferrer'>DEMO</a> |
                        <a href="https://github.com/JGD625/K911" style={{ textDecoration: 'none'}} target="_blank" rel='noopener noreferrer'> REPO</a> |  
                        <span onClick={this.onOpenModalOne} className="open-modal">SCREENS</span> 
                        </span>
                </div>
            </div>
            <div className="spaceX-container details-card">
            <img src={SPACEXIMG} className="portfolio-img" alt="SpaceX App"/>
                <div className="portfolio-details">
                    <span className="app-name">Space-X Search</span>
                    <p>Search the SpaceX API. Learn about upcoming launches and SpaceX history. </p>
                    <div className="tech-icons">
                        <FontAwesomeIcon icon={faJsSquare} className="tech-icon" /><FontAwesomeIcon icon={faHtml5} className="tech-icon" /><FontAwesomeIcon icon={faCss3} className="tech-icon"/>
                        </div> 
                    <span class="portfolio_links">
                        <a href="https://jgd625.github.io/SpaceXAPI/index.html" style={{ textDecoration: 'none'}} target="_blank" rel='noopener noreferrer'>DEMO</a> |
                        <a href="https://github.com/JGD625/SpaceXAPI" style={{ textDecoration: 'none'}} target="_blank" rel='noopener noreferrer'> REPO</a> | 
                        <span onClick={this.onOpenModalTwo} className="open-modal">SCREENS</span> 
                        </span>
                        
                </div>
            </div>
            <div className="coffeequiz-container details-card">
                <img src={CQIMG} className="portfolio-img" alt="Cofee Quiz App"/>   
                <div className="portfolio-details">
                    <span className="app-name">Coffee Quiz</span>
                    <p>JavaScript based quiz app. Test your knowledge of different coffee drinks.</p>
                    <div className="tech-icons">
                        <FontAwesomeIcon icon={faJsSquare} className="tech-icon" /><FontAwesomeIcon icon={faHtml5} className="tech-icon"/><FontAwesomeIcon icon={faCss3} className="tech-icon"/>
                        </div> 
                    <span class="portfolio_links">
                        <a href="https://jgd625.github.io/quizapp/" style={{ textDecoration: 'none'}} target="_blank" rel='noopener noreferrer'>DEMO</a> | 
                        <a href="https://github.com/JGD625/quizapp" style={{ textDecoration: 'none'}} target="_blank" rel='noopener noreferrer'> REPO</a> |
                        <span onClick={this.onOpenModalThree} className="open-modal">SCREENS</span> 
                        </span>
                        
                </div>
            </div>
            </div>
            </div>
            <Modal open={open} onClose={this.onCloseModal} center styles={bg} closeIconSize={16}>
            <div className="screens-wrapper"><img ref="bigPic" src={this.state.bigPicSrc} className="desktop-screen" alt="desktop screenshot"/><img ref="mobilePic" src={this.state.mobilePicSrc} className="mobile-screen" alt="mobile screen shot"/></div>
        </Modal>
            </div>
      
    );
  }
}

