import React, { Component } from 'react'
import MyWork from './pages/MyWork';

import { BrowserRouter as Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <div>
      <Route path="/my-work" component={MyWork} />
      </div>
    )
  }
}

export default Routes;
