import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './Title/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="container">
         <h1 className="display-4"> Avijit Chowdhury</h1>
         <Title name="Avijit Chowdhury" email="avijit.chy019@gmail.com" />
         <Title name="React" email= "react@facebook.com" />
         </div>
      </div>
    );
  }
}

export default App;
