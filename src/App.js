import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import NavbarHeader from './components/Navbar';

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavbarHeader />
        <Footer />  
      </div>
      </Router>
    );
  }
}

export default App;