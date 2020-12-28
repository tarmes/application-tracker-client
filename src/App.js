import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LandingSection from './components/LandingSection';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='routes'>
        <Switch>
          <Route exact path='/' component={LandingSection} />
          <Route path='/login' component={LogIn} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
