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






const storeInstance = createStore(
    combineReducers({
        pizzaSelectReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render( <Provider store = {storeInstance}>< App /></Provider>, document.getElementById('root'));