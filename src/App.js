import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Services from './components/Pages/AboutUs';
import Products from './components/Pages/Gallery';
import AboutUs from './components/Pages/AboutUs';
import Gallery from './components/Pages/Gallery';
import Form from './components/Pages/RegisterPage/Form';
import { TermsAndConditions } from './components/Pages/T&C';
import { Profile } from './components/Pages/profile';
// import SignUp from './components/Pages/RegisterPage/signUp';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/about-us' exact component={AboutUs} />
       <Route path='/gallery' exact component={Gallery} />
       <Route path='/terms' exact component={TermsAndConditions} />
       <Route path='/sign-up' exact component={Form} />
       <Route path='/profile/:id' exact component={Profile} />
     </Switch>
     </Router>
    </>
  );
}

export default App;
