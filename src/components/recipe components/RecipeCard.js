import React from "react";

const RecipeCard = props => {
  return (
    <div className="recipe-card">
      <h3>{props.recipe.name}</h3>
      <p>Source: {props.recipe.source}</p>
      <div className="recipe-card-types">
        {props.recipe.types.map(type => (
          <p className="type">{type} </p>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;