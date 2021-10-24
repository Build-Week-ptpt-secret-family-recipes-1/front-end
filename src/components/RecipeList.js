import React, { useEffect } from 'react';
import Recipe from '../components/recipe components/Recipe';
import RecipeSidebar from './recipe components/RecipeSidebar';
import AddRecipe from '../components/recipe components/AddRecipe';
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

import { getAllRecipes } from '../utils/actions';



const RecipeList = (props) => {

    const { currentRecipes, getAllRecipes } = props

    console.log('props', props)
    
    
    useEffect(() => {
        console.log('userId', window.localStorage.getItem('userId'))
        console.log(currentRecipes)
        const userId = localStorage.getItem('userId')
        getAllRecipes(userId)
    }, [])

    return(
        <div className='list-container'>

            <div className="recipeList">
                <p>recipes</p>
                {currentRecipes.map(recipe => {
                    return <h3 key={recipe.recipeName}>{recipe.recipeName}</h3>
                })}

            </div>

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

const mapStateToProps = state => {

    return({

        currentRecipes: state.currentRecipes

    })
}

export default connect(mapStateToProps, { getAllRecipes })(RecipeList);