import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
        </Router>
    )
}

export default App;