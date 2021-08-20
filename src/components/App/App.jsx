import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PizzaSelect from '../PizzaSelect/PizzaSelect';
import ContactForm from '../ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';


function App() {
  const totalPrice = useSelector(store => store.pizzaOrderReducer)

  

  return (
    <div className='App'>
    <Router>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <h2></h2>





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
          <PizzaSelect  />
          
        </Route>
        <Route path="/ContactForm" exact>
          <ContactForm />
        </Route>
    
      </Router>
    </div>
  );
}

export default App;
