import React, { Component } from "react";
import logo from "../assets/img/oliverLogo.png"; // with import
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
    return (
        <div className="frontPageHeader">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <HamburgerMenu isMenuTextVisible={this.props.isMenuTextVisible} isAboutTextVisible={this.props.isAboutTextVisible} toggleMenu={this.props.toggleMenu} fadeElements={this.props.fadeElements} isOpen={this.props.isOpen} />
        </div>
    );
  }
}

export default Header;
