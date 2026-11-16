import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Particle from "./components/Particle";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import Projects from "./components/Projects";

// Without full page reloads, start each new page at the top
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
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
          <Route exact path="/projects">
            <Projects />
          </Route>
          {/* Unknown URLs (e.g. old /login links) go to the home page */}
          <Redirect to="/" />
        </Switch>


      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} Goanar Abraham
        </div>
      </footer>
    </Router>
  );
}

export default App;
