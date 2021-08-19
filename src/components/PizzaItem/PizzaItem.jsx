import React, { useState } from 'react';


function PizzaItem ({pizza}) {
    const [buttonClick, setButtonClick] = useState(true);
    const toggleButtonClick = () => {
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