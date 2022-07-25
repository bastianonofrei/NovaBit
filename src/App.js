import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Footer from './components/footer/footer';
import React from 'react';
import Features123 from './components/features123/features123';

function App() {
  return (
    <div className='mainContainer'>
      <Header/>
      <Intro/>
      <Features123/>
      <Footer/>
    </div>
     
  

  );
}

export default App;