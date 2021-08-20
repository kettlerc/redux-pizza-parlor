import React from 'react';
import {useSelector } from 'react-redux';

function OrderDetails() {
    const checkoutOrder = useSelector(store => store.ContactFormReducer)
    console.log('this is our checkoutOrder', checkoutOrder);
    return (
         <div>
            <h3> Step 3: Checkout </h3>
                {checkoutOrder.map((orders, i) => {
                         return (
                        <div>
                        <h4>{orders.customer_name}</h4>
                         <h3>{orders.street_address}</h3>
                        <p>{orders.city}</p>
                         <h4>{orders.zip}</h4>
                        <h4>{orders.type}</h4> 
                        </div>
                      )
                })}
         </div>
    )
}
export default OrderDetails;
