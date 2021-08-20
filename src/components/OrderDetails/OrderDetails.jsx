import React from 'react';
import {useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function OrderDetails() {
    const checkoutOrder = useSelector(store => store.ContactFormReducer)
    console.log('this is our checkoutOrder', checkoutOrder);
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        
        history.push('/PizzaSelect');
    }

    


    const pizzaOrder = useSelector(store => store.pizzaOrderReducer)
    console.log('this is our checkoutOrder', checkoutOrder);
    return (
         <div>
            <h3> Step 3: Checkout </h3>
                {checkoutOrder.map((orders, i) => {
                         return (
                        <div>
                        <h5>{orders.customer_name}</h5>
                        <h5>{orders.street_address}</h5>
                        <h5>{orders.city} {orders.zip}</h5>

                        <h4>{orders.type}</h4> 
                        </div>
                      )
                })}

                 {pizzaOrder.map((pizza, i) => {
                        return (
                         <table>
                            <thead>
                                    <th>Name</th>
                                    <th>Cost</th>
                            </thead>
                                <tbody>
                                        {pizza.name}{pizza.price}
                                </tbody>
                            </table>
                )
            })}
            <button onClick={handleSubmit}> Checkout </button>
         </div>
         
    )
}
export default OrderDetails;
