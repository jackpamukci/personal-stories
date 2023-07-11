import React from 'react';
import './App.css';
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Front from './components/Front';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Projects from './pages/Projects';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
