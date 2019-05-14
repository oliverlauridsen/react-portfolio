import React, { Component } from 'react'

import menuIcon from '../assets/img/Burgermenu.png'; 
import crossIcon from '../assets/img/cross.png';
import MenuContent from './MenuContent';

class HamburgerMenu extends Component {
 
    render() {
      return (
          <div className="wrapper"> 
          <MenuContent isMenuTextVisible={this.props.isMenuTextVisible} isOpen={this.props.isOpen} toggleMenu={this.props.toggleMenu} isAboutTextVisible={this.props.isAboutTextVisible} fadeElements={this.props.fadeElements}/>
            <img className="burger" src={this.props.isOpen ? crossIcon : menuIcon } alt="burger menu icon" onClick={() => this.props.toggleMenu() }/>
          </div>
      );
    }
  }
  
export default HamburgerMenu;
