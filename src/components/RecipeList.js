import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';

const RecipeList = (props) => {
    const { recipe } = props
    return(
        <div className='list-container'>
        {
            recipe.map(recipe => <Recipe recipe={recipe}/>) 
        }
        </div>)
}

const mapStateToProps = (state) => {
    return ({
        recipe: state.recipe
    })
}

export default connect(mapStateToProps, { })(RecipeList);