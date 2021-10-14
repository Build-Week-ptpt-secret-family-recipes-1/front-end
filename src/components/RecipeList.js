import React from 'react';
import Recipe from './Recipe';

const RecipeList = () => {

    return(
        <div className='list-container'>
        {
            recipes.map(recipe => <Recipe />) 
        }
        </div>)
}

export default RecipeList;