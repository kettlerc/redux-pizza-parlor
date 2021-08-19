import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react'; 
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaSelect(){
   /* const dispatch = useDispatch();

    useEffect(() => {
        fetchPizzas();
    }, [] );

    const fetchPizzas = () => {
        axios ({
            method: 'GET',
            url: '/api/order'
        }).then((response) => {
            dispatch({
                type: 'SET_PIZZA_MENU',
                payload: response.data
            })
        }).catch((error) => {
            console.log('GET error', error);
        })
    }*/



    return (<PizzaItem />)

}

export default PizzaSelect; 