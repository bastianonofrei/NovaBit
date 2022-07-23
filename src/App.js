import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Intro/>
    </React.Fragment>

  );
}

export default App;
