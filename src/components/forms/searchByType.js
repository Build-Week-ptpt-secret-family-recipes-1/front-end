import React from "react";
import { connect } from "react-redux";
import { getAllRecipes } from "../../utils/actions";

class searchByType extends React.Component {
  state = {
    currentType: "all"
  };

  searchRecipes = (e, selectedType) => {
    e.preventDefault();
    if (selectedType === "all") {
      this.props.currentRecipes = this.props.recipes;
    } else {
      this.props.currentRecipes = [];
      this.props.recipes.forEach(recipe => {
        if (recipe.types.includes(selectedType)) {
          this.props.currentRecipes.push(recipe);
        }
      });
    }
  };

  render() {
    if (!this.props.recipes) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div className="search-container">
          {this.props.uniqueTypes.map((type, index) => (
            <button onClick={e => this.searchRecipes(e, type)} key={`${index}`}>
              {type}
            </button>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  getAllRecipes: state.getAllRecipes,
  uniqueTypes: state.uniqueTypes,
  currentRecipes: state.currentRecipes
});

export default connect(
  mapStateToProps,
  { getAllRecipes }
)(searchByType);