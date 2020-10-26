import React from 'react';
import Navbar from './components/Navbar';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Scripts from './components/pages/Scripts';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/services' component={Services} />
          <Route path='/scripts' component={Scripts} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
