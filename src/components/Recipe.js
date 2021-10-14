import React from 'react';

const Recipe = () => {
    return (
        <div className='recipe-card'>
            <div className='card-body'>
                <h3 className='card-title'> Recipe Name: </h3>
                    <hr/>
                    <p className='card-text'>By:</p>
                    <p className='card-text'>Descrpition:</p>
                    <p className='card-text'>Prep:</p>
                    <p className='card-text'>Total:</p>
                    <p className='card-text'>Servings:</p>
                    <p className='card-text'>Yield:</p>
                    <p className='card-text'>Nutrition Info:</p>
                <div className='ingridients-container'></div>
                    <h5>ingridents</h5>
                    <ul className='ingridents'>
                        <li>ingrident1</li>
                    </ul>
            </div>
        </div>
    )
}

export default Recipe; 