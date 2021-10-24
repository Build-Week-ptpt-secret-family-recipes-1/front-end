import React from 'react';
import Recipe from '../components/recipe components/Recipe';
import RecipeSidebar from './recipe components/RecipeSidebar';
import AddRecipe from '../components/recipe components/AddRecipe';
import { Link } from 'react-router-dom'

const RecipeList = () => {

    return(
        <div className='list-container'>
            <p>
                Grandma's Chocolate Chip Cookies
                Aunt Cheryl's Cobb Salad
                Uncle Ted's Babyback Ribs
                Papa's Mad Good BBQ
            </p>
             
            <RecipeSidebar />
            
            {/* {
            recipes.map(recipe => <Recipe />) 
        } */}
        </div>
    )}

export default RecipeList;