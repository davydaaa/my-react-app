
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SchoolPenTypes from './components/SchoolPenTypes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <SchoolPenTypes />
      <Footer />
    </div>
  );
}

export default App;