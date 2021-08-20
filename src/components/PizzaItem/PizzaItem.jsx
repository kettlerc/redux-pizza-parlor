import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function PizzaItem ({pizza}) {
    const dispatch = useDispatch();
    const [buttonClick, setButtonClick] = useState(true);
    const toggleButtonClick = () => {
        if (buttonClick){
        dispatch({
            type: 'ADD_TO_ORDER',
            payload: pizza
        })}
        else if (!buttonClick){
            dispatch({
                type: 'REMOVE_ORDER',
                payload: pizza
            })}
        
        setButtonClick (!buttonClick);
    }
    const toggleButton = () => {
        if (buttonClick){
            return <button onClick={toggleButtonClick}>Add</button>
        }
        else {
            return <button onClick={toggleButtonClick}>Remove</button>
        }

    }
    

    return (
       
        <div>
            <img src={pizza.image_path} />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <h4>{pizza.price}</h4>
            <div>
            {toggleButton()}
            </div>
        </div>
        
        
            
            
            
        
        

       

    )
}
export default PizzaItem;