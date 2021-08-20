import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

//Redux stuff
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    Provider
} from 'react-redux';

const pizzaSelectReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZA_MENU') {
        return action.payload
    }

    return state;
}
const ContactFormReducer = (state = [], action) => {
    if (action.type === 'ADD_ORDER') {
         return [...state, action.payload]
    }
    return state;
}

const pizzaOrderReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_ORDER'){
    return [...state, action.payload];
    }
    
    if (action.type === 'REMOVE_ORDER'){
    return state.filter(pizza => pizza!==action.payload)
    }
  
return state;
}
const orderReceiveReducer = (state = [], action) => {
    if (action.type === 'SET_CHECKOUT_ORDER') {
        return action.payload
    }

    return state;
}








const storeInstance = createStore(
    combineReducers({

        pizzaSelectReducer,
        orderReceiveReducer,
        ContactFormReducer,
        pizzaOrderReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render( <Provider store = {storeInstance}>< App /></Provider>, document.getElementById('root'));