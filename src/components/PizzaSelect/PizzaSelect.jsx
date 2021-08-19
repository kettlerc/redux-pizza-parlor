import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react'; 
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaSelect(){
    const pizzaMenu = useSelector(store => store.pizzaSelectReducer)
    const dispatch = useDispatch();

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



    return (
        <div>
            <ul>
                {pizzaMenu.map((pizza, i) => {
                    return <PizzaItem
                    key = {i}
                    pizza={pizza} />
                })}
             </ul>
        </div>
    
    
    
  
    
    
    )

}

export default PizzaSelect; 