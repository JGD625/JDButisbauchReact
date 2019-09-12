import React, {Component} from 'react';
import './Resume.css'

class Resume extends Component {
render() {
    return (
        <div className="resume-section-wrapper">
            <span className="section3-greeting">But wait, </span><span className="section3-greetingB">there's more:</span>
            <div className="resume-container">
            <div className="resume-inner-wrapper">
                <div className="resume-card">
                <span className="resume_title">SKILLS</span>
                  <ul className="resume_list">
                    <li><span className="bigger">Development:</span> HTML5, CSS3, JavaScript, jQuery, React, RESTful API, Node, Postgres</li>
                    <li><span className="bigger">Related:</span> Written and verbal communication, 日本語能力試験 JLPT 2 Certified Japanese, Presentation Skills</li>
                    <li><span className="bigger">Proven</span> record of problem solving, customer service, team work, and a strong understanding of design</li>
                  </ul>
                </div>
                <div className="resume-card">
                <span className="resume_title">EXPERIENCE</span>
                  <ul className="resume_list">
                    <li><span className="bigger">Salon Gloss</span> (2017- ) Director of Education</li>    
                    <li><span className="bigger">Fuma Salon on Melrose</span> (2013- 2016) Stylist</li>    
                    <li><span className="bigger">Neuma Beauty</span> (2013-2016) National Design Team Artist and Educator</li>    
                    <li><span className="bigger">Salon Platinum Black</span> (2012-2013) Assistant Stylist</li>    
                    <li><span className="bigger">Tsukasa Yamasaki</span> (2009-2010) Educator</li>    
                    <li><span className="bigger">Shiso-shi Board of Education</span> (2006-2008)</li>
                  </ul>
                </div>
                <div className="resume-card">
                <span className="resume_title">EDUCATION</span>
                  <ul className="resume_list">
                  <li><span className="bigger">Thinkful</span> Full-Stack Development (2019)</li>
                    <li><span className="bigger">Aveda Institute Los Angeles</span> (Completed 2011)</li>
                    <li><span className="bigger">Aveda Institute Atlanta</span> (Completed 2011)</li>
                    <li><span className="bigger">Yoshida School of Language</span> (Completed 2009)</li>
                    <li><span className="bigger">Kyoto University of Foreign Studies</span> (2003-2004)</li>
                    <li><span className="bigger">University of Georgia</span> (Graduation 2005)</li>
                  </ul>
                </div>
                </div>
            </div>
        </div>
    );
  }
}
  export default Resume;
  