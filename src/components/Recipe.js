import React from 'react';

const Recipe = (props) => {
    const { recipe } = props;
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
                <div className='ingredients-container'></div>
                    <h5>Ingredients</h5>
                    <ul className='ingredients'>
                        <li>ingredient1</li>
                    </ul>
            </div>
        </div>
    )
}

export default Recipe; 