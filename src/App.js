import React, { Component, Fragment }  from "react";
import './App.scss';
import Header from './components/Header';
import Routes from './components/Routes';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.state = { isAboutTextVisible: true };
    this.state = { isMenuTextVisible: false };
    this.state = { isIntroVisible: true};

  }
  
  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ isAboutTextVisible: false});
    this.setState({ isMenuTextVisible: true});
    this.setState({ isIntroVisible: !this.state.isIntroVisible});
  }

  fadeElements = () => {
    this.setState({ isMenuTextVisible: false});
    this.setState({ isAboutTextVisible: !this.state.isAboutTextVisible});
  }
 

  render() {
    return (
      <Router>
        <Routes />
        <Switch>
          <Fragment>
            <div className="App">
            <Route exact path="/" render={props => (
              <div className="frontPageWrapper">
              <Header isMenuTextVisible={this.state.isMenuTextVisible} isIntroVisible={this.state.isIntroVisible} isAboutTextVisible={this.state.isAboutTextVisible} toggleMenu={this.toggleMenu} fadeElements={this.fadeElements} isOpen={this.state.isOpen} />
                <div className="oliverBackground"></div>
                <div className="page-overlay"> </div>
                <div style={{opacity: this.state.isIntroVisible ? 1 : 0}} className="introduction">
                  <h1> Hi, I'm Oliver </h1>
                  <p> Danish web developer & designer </p>
                  <Link to='/my-work/'>
                    <button className="frontPageButton"> See my work </button>
                  </Link>
                </div>
              </div>
            )} 
            />
            </div>
          </Fragment>
        </Switch>
      </Router>
    );
  }
  
}

export default App;
