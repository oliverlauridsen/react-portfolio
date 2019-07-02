import React, { Component } from 'react'
import {Motion, spring} from 'react-motion';
import { Link } from "react-router-dom";
import Icons from './Icons';

class MenuContent extends Component {

  render() {
    return (
        <Motion style={{ x: spring(this.props.isOpen ? 0 : -600), opacity: spring(this.props.isOpen ? 1 : 0)}}>
          {(style) => (
          <div className="sidebar" style={{opacity: style.opacity, transform: `translateX(${style.x}px)`, visibility: (this.props.isOpen ? 'visible' : 'hidden')}}>
            <Motion style={{opacity: spring(this.props.isMenuTextVisible ? 1 : 0)}}>
              {(style) => (
                <ul style={{opacity: style.opacity, visibility: (this.props.isMenuTextVisible ? 'visible' : 'hidden') }}>
                  <Link to="/my-work/" style={linkStyle}>
                      <li> My work </li>
                  </Link>
                      <li onClick={() => this.props.fadeElements()} className="aboutLink"> About </li>
                </ul>
              )}
            </Motion>
            <Motion style={{opacity: spring(this.props.isAboutTextVisible ? 1 : 0)}}>
              {(style) => (
                <div className="about-text-section" style={{opacity: style.opacity, visibility: (this.props.isAboutTextVisible ? 'visible' : 'hidden')}}>
                    <h3> Hi, I'm Oliver!</h3>
                    <p> I am a danish software developer currently based in Copenhagen, Denmark. I love creating new stuff and
                        finding creative solutions. My education consists of Multimedia Design and web development at Erhversakademiet Lillebælt in Odense.</p>
                    <h3> Qualifications</h3>
                    <p> I’ve worked with companies such as Slagelse Musikhus, Emptor International, BUPL, HOD, Danalife and others. I am currently focused 100% on frontend development, specifically React development and I try to learn as much as I possibly can each day. I love the process of learning and improving my craft, and always try to better myself everyday.</p>
                    <h3> Techonologies </h3>
                    <Icons />

                </div>
              )}
          </Motion>  

          </div>
          )}
        </Motion>
    )
  }
}

const linkStyle = {
    textDecoration: 'none'  
  };

export default MenuContent;
