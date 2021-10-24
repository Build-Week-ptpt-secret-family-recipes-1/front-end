import React from "react";
import { connect } from "react-redux";
import { getRecipeByID, updateRecipe } from "../../utils/actions";
import { withRouter } from "react-router-dom";
import ShowArrayItem from "../forms/ShowArrayItem";
import axiosWithAuth from "../../utils/axiosWithAuth";

class EditRecipeForm extends React.Component {
    state = {
        name: '',
        by: '',
        prep: '',
        total: '',
        servings: '',
        yield: '',
        nutritionInfo: "",
        ingredients: [],
        type: '',
        commonTypes: [
            "Breakfast",
            "Lunch",
            "Dinner",
            "Dessert",
            "Side",
            "Main",
            "Appetizer",
            "Vegetarian",
            "Vegan",
            "Chicken",
            "Pork",
            "Beef",
            "Quick"
          ]
    };

    componentDidMount() {
        if (!this.props.recipe) {
          axiosWithAuth()
            .get(`/recipes/${this.props.match.params.id}`)
            .then(res => {
              this.setState({
                name: res.data.recipe.name,
                by: res.data.recipe.by,
                ingredients: res.data.recipe.ingredients,
                prep: res.data.recipe.prep,
                types: res.data.recipe.types,
                type: ""
              });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.setState({
            name: this.props.recipe.name,
            by: this.props.recipe.by,
            ingredients: this.props.recipe.ingredients,
            prep: this.props.recipe.prep,
            types: this.props.recipe.types,
            type: ""
          });
        }
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.recipe !== this.props.recipe && this.props.success) {
          this.setState({
            name: this.props.recipe.name,
            by: this.props.recipe.by,
            ingredients: this.props.recipe.ingredients,
            prep: this.props.recipe.prep,
            types: this.props.recipe.types,
            type: ""
          });
        }
      }
    
      handleChanges = e => {
        e.persist();
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      };
    
      addIngredient = e => {
        e.preventDefault();
        this.setState(state => {
          const ingredients = [...state.ingredients];
          return {
            ingredients,
          };
        });
      };
    
      addPrep = e => {
        e.preventDefault();
        this.setState(state => {
          const prep = [...state.prep];
          return {
            prep
          };
        });
      };
    
      addTypeByButton = (e, type) => {
        e.preventDefault();
        this.setState(state => {
          const types = [...state.types, type.toString()];
          const commonTypes = state.commonTypes.filter(el => el !== type);
          return {
            types,
            commonTypes
          };
        });
      };
      addCustomType = e => {
        e.preventDefault();
        const newTypes = [...this.state.types];
        newTypes.push(this.state.type);
        this.setState({
          types: newTypes,
          type: ""
        });
      };
    
      deleteIngredient = (e, index) => {
        e.preventDefault();
        const newIngredients = [...this.state.ingredients];
        newIngredients.splice(index, 1);
        this.setState({
          ingredients: newIngredients
        });
      };

      deletePrep = (e, index) => {
        e.preventDefault();
        const newPrep = [...this.state.prep];
        newPrep.splice(index, 1);
        this.setState({
          prep: newPrep
        });
      };

      deleteType = (e, index) => {
        e.preventDefault();
        const newTypes = [...this.state.types];
        newTypes.splice(index, 1);
        this.setState({
          types: newTypes
        });
      };
    
    
      updateRecipe = e => {
        e.preventDefault();
        // const fullNoteString = this.state.fullNote.join("||");
        const updatedRecipe = {
          name: this.state.name,
          by: this.state.by,
          ingredients: this.state.ingredients,
          prep: this.state.prep,
          types: this.state.types
        };
        this.props.updateRecipe(this.props.match.params.id, updatedRecipe, this.props.history);
      };
    
      render() {
        return (
          <div className="recipe-form">
            <h2>Edit Recipe</h2>
            <form onSubmit={this.updateRecipe}>
              <input
                placeholder={this.state.name}
                type="text"
                required
                name="name"
                onChange={this.handleChanges}
                value={this.state.name}
              />
              <input
                placeholder={this.state.by}
                type="text"
                name="by"
                onChange={this.handleChanges}
                value={this.state.by}
              />
              <div className="ingredients-container">
                <h3>Ingredients</h3>
    
                <input
                  placeholder="Ingredients"
                  type="text"
                  name="ingredients"
                  onChange={this.handleChanges}
                  value={this.state.ingredients}
                />
                <button onClick={this.addIngredient}>Add Ingredient</button>
    
                <div className="ingredients-list">
                {this.state.ingredients.map((ingredient, index) => (
                  <div className="ingredient">
                    <ShowArrayItem
                      listNum={index + 1}
                      item={ingredient}
                      key={index}
                    />
                      <button
                        onClick={e => this.deleteIngredient(e, index)}
                      />
                  </div>
                ))}
                </div>
              </div>
              <div className="prep-container">
                <h3>Prep</h3>
                <input
                  type="text"
                  name="prep"
                  onChange={this.handleChanges}
                  value={this.state.prep}
                  placeholder="Prep"
                />
                <button onClick={this.addPrep}>Plus</button>
                {this.state.prep.map((prep, index) => (
                  <div className="prep">
                    <ShowArrayItem
                      listNum={index + 1}
                      item={prep}
                      key={index}
                    />
                      <button 
                      onClick={e => this.deletePrep(e, index)}
                      />
                  </div>
                ))}
              </div>
              <div className="types-container">
                <h3>Types</h3>
                <div className="types">
                  {this.state.commonTypes.map((type, index) => {
                    return (
                      <button
                        key={index}
                        onClick={e => this.addTypeByButton(e, type)}
                      >
                        {type}
                      </button>
                    );
                  })}
                  <input
                    type="text"
                    name="type"
                    onChange={this.handleChanges}
                    value={this.state.type}
                  />
                  <button onClick={this.addCustomType}>Add Custom Type</button>
                  {this.state.types.map((type, index) => (
                    <div className="type">
                      <p>{type}</p>
                      <button
                        onClick={e => this.deleteType(e, index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button type="submit">Submit Recipe</button>
            </form>
          </div>
        );
      }
    }
    
    const mapStateToProps = state => ({
      recipe: state.recipe,
      getRecipeByID: state.getRecipeByID,
      editingRecipe: state.editingRecipe,
      success: state.success
    });
    
    export default withRouter(
      connect(
        mapStateToProps,
        { getRecipeByID, updateRecipe }
      )(EditRecipeForm)
    );