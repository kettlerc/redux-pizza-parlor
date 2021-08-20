import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function ContactForm({fetchPizzas}) {
    const dispatch = useDispatch();
    const [customer_name, setCustomerName] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState(0);
    const [type, setType] = useState(true);
    const [total, setTotal] = useState(0);
    const history = useHistory();

    const contactFormObject = {
        customer_name,
        street_address,
        city,
        zip,
        type
        //total
    }

    const handleSubmit = event => {
        event.preventDefault();

        console.log('handle submit');
        dispatch({
            type: 'ADD_ORDER',
            payload: contactFormObject 
        })
    }
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
                    <label htmlFor="pickup">Pickup</label>
                    <input
                        type="radio"
                        id="delivery"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                    />
                    <label htmlFor="delivery">Delivery</label>

                    <button > NEXT
                    </button>
                </form> 
            </>
        )
}
export default ContactForm;