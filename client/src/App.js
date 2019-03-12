import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateNote from "./component/CreateNote";
import ViewNote from "./component/ViewNote";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Note taking App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">View your Notes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Note</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <nav className="navbar fixed-bottom navbar-light bg-light">
               <a className="navbar-brand" href="#"> ⓒ 2019 Abhinav Jonnada</a>
          </nav>

          <Route path="/" exact component={ViewNote} />
          <Route path="/create" component={CreateNote} />

        </div>
      </Router>
    );
  }
}

export default App;
