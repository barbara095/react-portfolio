import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import './App.css';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
