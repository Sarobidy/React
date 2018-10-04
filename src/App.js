import React, { Component } from 'react';
import NavbarHeader from './components/Navbar';

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader />
      
        <Footer />  
      </div>
    );
  }
}

export default App;