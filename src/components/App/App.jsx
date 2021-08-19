import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import PizzaSelect from '../PizzaSelect/PizzaSelect';
import ContactForm from '../ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'; 

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        fetchPizzas();
    }, [] );

    const fetchPizzas = () => {
        axios ({
            method: 'GET',
            url: '/api/order'
        }).then((response) => {
            dispatch({
                type: 'SET_PIZZA_MENU',
                payload: response.data
            })
        }).catch((error) => {
            console.log('GET error', error);
        })
    }


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
            <li>
              <Link to="/PizzaSelect">Pizza Select</Link>
            </li>
          </ul>
        </nav>
        <Route path="/PizzaSelect" exact>
          <PizzaSelect fetchPizzas ={fetchPizzas} />
          
        </Route>
        <Route path="/ContactForm" exact>
          <ContactForm />
        </Route>
    
      </Router>
    </div>
  );
}

export default App;
