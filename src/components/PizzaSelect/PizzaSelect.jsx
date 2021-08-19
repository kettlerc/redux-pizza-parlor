import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react'; 

function PizzaSelect(){
    const dispatch = useDispatch();

    useEffect(() => {
        fetchPizzas();
    }, [] );

    const fetchPizzas = () => {
        axios ({
            method: 'GET',
            url: '/pizzas'
        }).then((response) => {
            dispatch({
                type: 'SET_PIZZA_MENU',
                payload: response.data
            })
        }).catch((error) => {
            console.log('GET error', error);
        })
    }



    return (<h1>Our pizza test</h1>)

}

export default PizzaSelect; 