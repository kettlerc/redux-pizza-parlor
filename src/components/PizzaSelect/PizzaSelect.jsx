import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react'; 
import PizzaItem from '../PizzaItem/PizzaItem';
import { useHistory } from 'react-router-dom';

function PizzaSelect(){
    const pizzaMenu = useSelector(store => store.pizzaSelectReducer)
    const dispatch = useDispatch();
    const history = useHistory();

   useEffect(() => {
        fetchPizzas();
    }, [] );

    const fetchPizzas = () => {
        axios ({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {
            dispatch({
                type: 'SET_PIZZA_MENU',
                payload: response.data
            })
        }).catch((error) => {
            console.log('GET error', error);
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        history.push('/ContactForm');
    }



    return (
        <div>
            <ul>
                {pizzaMenu.map((pizza, i) => {
                    return <PizzaItem
                    key = {i}
                    pizza={pizza} />
                })}
             </ul>
            <button onClick={handleSubmit}> NEXT </button>
        </div>
    
    
    
  
    
    
    )

}

export default PizzaSelect; 