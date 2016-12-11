import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

export default (

  <Route path="/" component ={App}>
    <IndexRoute name="Home" component={HomePage}/>
    <Route path="about" name="About"  component={AboutPage}/>
    <Route path="contact" name="Contact"  component={ContactPage}/>
  </Route>
);
