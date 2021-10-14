import React from 'react';
import Recipe from './Recipe';

const RecipeList = () => {

    return(
        <div className='list-container'>
        {
            recipes.map(smurf => <Recipe />) 
        }
        </div>)
}

export default RecipeList;