import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [customer_name, setCustomerName] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState(0);
    const [type, setType] = useState('');
    const [total, setTotal] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();

        console.log('handle submit');

        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name,
                street_address,
                city,
                zip,
                type,
                //total
            }.then(() => {
                //GET function
            }).catch(error => {
                console.log('error on post', error);
            })
        })


        return (
            <>
                <h2>Customer Information</h2>
                <form onSubmit={handleSubmit} className="addPizzaForm">
                    <input 
                        placeholder="name"
                        value={customer_name}
                        onChange={(event) => setCustomerName(event.target.value)}
                    />
                    <input
                        placeholder="street address"
                        value={street_address}
                        onChange={(event) => setStreetAddress(event.target.value)}
                    />
                    <input
                        placeholder="city"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                    <input
                        placeholder="zip"
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
                    />
                    <input
                        type="radio"
                        id="pickup"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                    />
                    <label for="pickup">Pickup</label>
                    <input
                        type="radio"
                        id="delivery"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                    />
                    <label for="delivery">Delivery</label>

                    <button type="submit">Next</button>
                </form>
            </>
        )
    }
}

export default ContactForm;