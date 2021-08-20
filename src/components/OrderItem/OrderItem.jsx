import React, { useState } from 'react';

function OrderItem({ orders }) {

    return (

        <div>
            <h4>{orders.customer_name}</h4>
            <h3>{orders.street_address}</h3>
            <p>{orders.city}</p>
            <h4>{orders.zip}</h4>
            <h4>{orders.type}</h4>
        </div>
    )
}
export default OrderItem;