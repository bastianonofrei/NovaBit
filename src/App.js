import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Footer from './components/footer/footer';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Intro/>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
