import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LandingSection from './components/LandingSection';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='routes'>
        <Route exact path='/' component={LandingSection} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
