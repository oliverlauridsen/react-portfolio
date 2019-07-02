import React, { Component } from 'react'
import MyWork from './pages/MyWork';
import { Route }from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
          <Route path="/my-work/" component={MyWork} />
      </React.Fragment>
    )
  }
}

export default Routes;
