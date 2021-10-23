import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllRecipes } from "../../utils/actions";

class RecipeSideBar extends React.Component {
  componentDidMount() {
    this.props.getAllRecipes();
  }
  render() {
    if (!this.props.currentRecipes || this.props.getAllRecipes) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="recipe-cards-wrapper">
        {console.log("this" ,this.props.currentRecipe)}
          {this.props.currentRecipes.map(name => {
            return (
              <div className="recipe-card">
                <Link to={`/recipes/view/${name.id}`} key={name.id}>
                  <h3>{name.name}</h3>
                  <p>Source: {name.by}</p>
                  <div className="recipe-card-types">
                    {name.types.map(type => (
                      <p className="type">{type} </p>
                    ))}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  // names: state.names.recipes,
  getAllRecipes: state.getAllRecipes,
  currentRecipes: state.currentRecipes
});

export default connect(
  mapStateToProps,
  { getAllRecipes }
)(RecipeSideBar);