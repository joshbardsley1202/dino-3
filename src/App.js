import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Jobs from "./Components/Jobs"
import Footer from "./Components/Footer"


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Jobs/>
        <Footer />
        
      </div>
    );
  }
}

export default App;
