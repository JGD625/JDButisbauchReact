import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'


class Contact extends Component {

render() {
  const style = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0
      }
    })
  };
    return (
      <div className="contact-container">
      <span className="section4-greeting">Let's connect, shall we?</span>
      <div className="contact-list">
        <a href="https://github.com/JGD625" target="_blank" styles={style} rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} className="contact-icon"/>  <span>GitHub</span></a>
        <a href="https://www.linkedin.com/in/julie-butisbauch" target="_blank" styles={style} rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} className="contact-icon"/> <span>LinkedIn</span></a>
        <a href="mailto:jdbutisbauch@email.com?Subject=From%20JDB%20Website" styles={style} ><FontAwesomeIcon icon={ faPaperPlane }  className="contact-icon"/> <span>Email</span></a>
      </div>
      </div>
    );
  }
}
  export default Contact;
  