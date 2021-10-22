import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addRecipe } from "../../utils/actions";
import ShowArrayItem from "./ShowArrayItem";

const AddForm = () => {

    const [state, setState] = useState({
        name: '',
        by: '',
        description: '',
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
    })

    const handleChanges = e => {
        e.persist();
        setState({
            ...state, 
            [e.target.name]: e.target.value
        });
    }
    
      const addIngredient = e => {
        e.preventDefault();
        setState(state => {
          const ingredients = [...state.ingredients, state.nutritionInfo];
          return {
            ingredients,
            nutritionInfo: ""
          };
        });
      };
    
      const addPrep = e => {
        e.preventDefault();
        this.setState(state => {
          const directions = [...state.prep];
          return {
            prep
          };
        });
      };
    
      const addTypeByButton = (e, type) => {
        e.preventDefault();
        setState(state => {
          const types = [...state.types, type.toString()];
          const commonTypes = state.commonTypes.filter(el => el !== type);
          return {
            types,
            commonTypes
          };
        });
      };

      addCustomType = (e) => {
        e.preventDefault();
        const newTypes = [...state.types]
        newTypes.push(state.type)
        setState({
          types: newTypes,
          type: ""
        })
      }
    
      const deleteIngredient = (e, index) => {
        e.preventDefault();
        const newIngredients = [...state.ingredients];
        newIngredients.splice(index, 1);
        setState({
          ingredients: newIngredients
        });
      };

      const deletePrep = (e, index) => {
        e.preventDefault();
        const newPrep = [...state.prep];
        newPrep.splice(index, 1);
        setState({
          prep: newPrep
        });
      };

        const deleteType = (e, index) => {
        e.preventDefault();
        const newTypes = [...state.types];
        newTypes.splice(index, 1);
        setState({
          types: newTypes
        });
      };
      
      const submitRecipe = e => {
        e.preventDefault();
        const newRecipe = {
          name: state.name,
          by: state.by,
          ingredients: state.ingredients,
          prep: state.prep,
          type: state.types
        };
        console.log('submit recipe history', history);
        addRecipe(newRecipe, history);
      };
    

    return(
        <section>
        <h2>Add Recipe</h2> 
        <div className='add-recipe-form'>
            <form onSubmit={submitRecipe}>
                <div className='name-container'>
                    <label>Name:

                        <input 
                        onChange={handleChanges} 
                        value={state.name} 
                        name='name' 
                        placeholder="Name" 
                        type="text"
                        />

                    </label>
                </div>

                <div className='author-container'>
                    <label>By:

                        <input 
                        onChange={handleChanges} 
                        value={state.by} 
                        name='by' 
                        placeholder="by" 
                        type="text" 
                        />

                    </label>
                </div>

                <div className='description-container'>
                    <label>Description:

                        <input 
                        onChange={handleChanges} 
                        value={state.description} 
                        name='description' 
                        placeholder='Description' 
                        type="text"/>
                    </label>

                </div>

                <div className="ingredients-container">
                    <label>Ingredients

                    <input
                    placeholder="Ingredients"
                    type="text"
                    name="ingredients"
                    onChange={handleChanges}
                    value={state.ingredients}
                    />
                    <button onClick={addIngredient}>Add Ingredient</button>

                    {state.ingredients.map((ingredient, index) => (
                    <div className="ingredient">
                        <ShowArrayItem
                        listNum={index + 1}
                        item={ingredient}
                        key={index}
                        />
                        <button onClick={e => deleteIngredient(e, index)}>
                        Delete Ingredient
                        </button>
                    </div>
                    ))}
                    </label>
                </div>

                <div className='prep-container'>
                    <label>Prep:

                        <input  
                        onChange={handleChanges} 
                        value={state.prep} 
                        name='prep' 
                        placeholder='Prep' 
                        type="text" 
                        />

                        <button onClick={addPrep}>Plus</button>
                        {state.prep.map((prep, index) => (

                            <div className="prep">
                                <ShowArrayItem
                                listNum={index + 1}
                                item={prep}
                                key={index}
                                />
                                <button onClick= {e => deletePrep(e,index)}>
                                    Delete Prep 
                                </button>
                            </div>
                        ))}
                    </label>
                </div>

                <div className="types-wrapper">
                    <label>Types
                    <div className="types">
                    {state.commonTypes.map((type, index) => {
                        return (
                        <button
                            key={index}
                            onClick={e => addTypeByButton(e, tag)}
                        >
                            {type}
                        </button>
                        );
                    })}
                    <input
                        type="text"
                        name="type"
                        onChange={handleChanges}
                        value={state.type}
                    />
                    <button onClick={addCustomType}>Add Custom Type</button>
                    {state.types.map((type, index) => (
                        <div className="type">
                        <p>{type}</p>
                        <button onClick={e => deleteType(e, index)}>
                            Delete Type
                        </button>
                        </div>
                    ))}
                    </div>
                    </label>
                </div>
          <button type="submit">Add Recipe</button>

                {/* <div className='total-container'>
                    <label> Total:
                        <input  onChange={handleChanges} value={state.total} name='total' />
                    </label>
                </div>
                <div className='form-group'>
                    <label>Servings:
                        <input  onChange={handleChange} value={state.servings} name='servings'/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>Yield:
                        <input  onChange={handleChange} value={state.yield} name='yield'/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>Nutrition Info:
                        <input onChange={handleChange} value={state.nutritionInfo} name='nutritionInfo' />
                    </label>
                </div>
                <div className='form-group'>
                    <label>Ingredients:
                        <input onChange={handleChange} value={state.ingredients}/>
                    </label>
                </div> */}
            </form>
        </div>
        </section>
    );
}

const mapStateToProps = state => ({
    addingRecipe: state.addingRecipe
  });
  
  export default withRouter(
    connect(
      mapStateToProps,
      { addRecipe }
    )(AddForm)
  );