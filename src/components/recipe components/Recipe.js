import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import ShowArrayItem from "../forms/ShowArrayItem";
import { getRecipeByID, deleteRecipe } from "../../utils/actions";

class Recipe extends React.Component {
    componentDidMount() {
      this.props.getRecipeByID(this.props.recipeID);
    }
    componentDidUpdate(prevProps) {
  
      if (prevProps.recipeID !== this.props.recipeID) {
        this.props.getRecipeByID(this.props.recipeID);
      }
    }
  
    deleteRecipe = (e, ID) => {
      e.preventDefault();
      this.props.deleteRecipe(ID, this.props.history);
    };
  
    render() {
      if (this.props.getRecipeByIDByID || !this.props.recipe) {
        return <h2>Loading Recipe...</h2>;
      }
      return (
        <div className="recipe-view-wrapper">
          <h2>{this.props.recipe.name}</h2>
          <p>Source: {this.props.recipe.by}</p>
  
          <h3>Types</h3>
          <div className="types">
            {this.props.recipe.types.map((type, index) => (
              <p key={`${index}`} className="type">
                {type}
              </p>
            ))}
          </div>
          <h3>Ingredients</h3>
          {this.props.recipe.ingredients.map((ingredient, index) => (
            <ShowArrayItem
              listNum={index + 1}
              item={ingredient}
              key={`${index}`}
            />
          ))}
          <h3>Prep</h3>
          {this.props.recipe.instructions.map((instruction, index) => (
            <ShowArrayItem
              listNum={index + 1}
              item={instruction}
              key={`${index}`}
            />
          ))}
          <h3>Description</h3>
          <p>{this.props.recipe.description}</p>
          <Link
            to={{
              pathname: `/recipes/edit/${this.props.recipeID}`,
              recipeID: this.props.recipeID
            }}
            key={this.props.recipeID}
          >
          </Link>
  
          <button
            onClick={e => this.deleteRecipe(e, this.props.recipeID)}
          />
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    recipe: state.recipe,
    getRecipeByIDByID: state.getRecipeByIDByID
  });
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getRecipeByID, deleteRecipe }
    )(Recipe)
  );