import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PizzaSelect from '../PizzaSelect/PizzaSelect';
import ContactForm from '../ContactForm/ContactForm';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useSelector } from 'react-redux';
import AdminTable from '../AdminTable/AdminTable';


function App() {
  const totalPrice = useSelector(store => store.pizzaOrderReducer)
  function calculateTotalPrice () {
    let sum = 0;
     for (let item of totalPrice){
       
       sum += Number(item.price)
     }
     return sum;
  }
  

  return (
    <div className='App'>
    <Router>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <h2>TOTAL:{calculateTotalPrice()}</h2>





        </header>
        {/* <nav>
          <ul>
            <li>
              <Link to="/ContactForm">Contact From</Link>
            </li>
            <li>
              <Link to="/PizzaSelect">Pizza Select</Link>
            </li>
            <li>
              <Link to="/OrderDetails">Order Details</Link>
            </li>
          </ul>
        </nav> */}
        <Route path="/PizzaSelect" exact>
          <PizzaSelect  />
          
        </Route>
        <Route path="/ContactForm" exact>
          <ContactForm />
        </Route>

       <Route path="/AdminTable" exact>
          <AdminTable />
          </Route>
        <Route path="/OrderDetails" exact>
          <OrderDetails />
        </Route>
    
      </Router>
      
    </div>
  );
}

export default App;
