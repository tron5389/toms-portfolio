import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from './components/Home';
import Footer from './components/Footer'
import About from './components/About'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar/>
        <Switch>  
          <Route exact path="/" component={home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Skills" component={Skills}/>
          <Route exact path="/Works" component={Works}/>
          <Route exact path="/Contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
