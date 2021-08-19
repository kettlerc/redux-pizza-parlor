import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';

function App() {

  return (
    <div className='App'>
    <Router>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/ContactForm">Contact From</Link>
            </li>
          </ul>
        </nav>
        <Route path="/ContactForm" exact>
          <ContactForm />
        </Route>
    
      </Router>
    </div>
  );
}

export default App;
