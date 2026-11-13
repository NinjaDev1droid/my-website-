import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Particle from "./components/Particle";



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UploadImage from "./components/UploadImage";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Particle />
            <Header />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        <Route exact path="/projects">
            <Projects />
          </Route>
          
        </Switch>

        <Route exact path="/uplaod">
            <UploadImage/>
          </Route>
        
      </Router>
     
    </div>
  );
}

export default App;
