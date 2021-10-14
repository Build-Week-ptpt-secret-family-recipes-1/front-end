import React, { useState } from 'react';

const AddForm = () => {

    const [state, setState] = useState({
        name: '',
        by: '',
        description: '',
        prep: '',
        total: '',
        servings: '',
        yield: '',
        nutritionInfo: '',
        ingredients: ''
    })

    const handleChange = e => {
        setState({
            ...state, 
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <section>
        <h2>Add Recipe</h2> 
        <div className='form-group'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name:
                        <input onChange={handleChange} value={state.name} name='name'/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>By:
                        <input onChange={handleChange} value={state.by} name='by'/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>Descrpition:
                        <input onChange={handleChange} value={state.description} name='description'/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>Prep:
                        <input  onChange={handleChange} value={state.prep} name='prep' />
                    </label>
                </div>
                <div className='form-group'>
                    <label> Total:
                        <input  onChange={handleChange} value={state.total} name='total' />
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
                </div>
            </form>
        </div>
        </section>
    )
}

export default AddForm; 