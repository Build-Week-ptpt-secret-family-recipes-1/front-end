import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    FIND_USER_START,
    FIND_USER_SUCCESS,
    FIND_USER_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    GET_RECIPE_BY_ID_START,
    GET_RECIPE_BY_ID_SUCCESS,
    GET_RECIPE_BY_ID_FAILURE,
    GET_RECIPE_BY_TYPE_START,
    GET_RECIPE_BY_TYPE_SUCCESS,
    GET_RECIPE_BY_TYPE_FAIL,
    GET_ALL_RECIPES_START,
    GET_ALL_RECIPES_SUCCESS,
    GET_ALL_RECIPES_FAILURE,
    ADD_RECIPE_START,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_FAILURE,
    EDIT_RECIPE_START,
    EDIT_RECIPE_SUCCESS,
    EDIT_RECIPE_FAILURE,
    DELETE_RECIPE_START,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE,
  } from "./actions";
  
  const initialState = {
    recipe: null,
    titles: [],
    error: null,
    registeringUser: false,
    loggingIn: false,
    findingUser: false,
    addingUser: false,
    getRecipeByID: false,
    getRecipeByType: false,
    getAllRecipes: false,
    addingRecipe: false,
    editingRecipe: false,
    deletingRecipe: false,
    uniqueTags: ["all"],
    currentRecipes: [],
    success: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_START:
        return {
          ...state,
          error: null,
          registeringUser: true,
          success: false
  
        };

      case REGISTER_SUCCESS:
        return {
          ...state,
          error: null,
          registeringUser: false,
          success: true
        };

      case REGISTER_FAILURE:
        return {
          ...state,
          error: action.payload,
          registeringUser: null,
          success: false
        };

      case LOG_IN_START:
        return {
          ...state,
          error: null,
          loggingIn: true,
          success: false
        };

      case LOG_IN_SUCCESS:
        return {
          ...state,
          error: null,
          loggingIn: false,
          success: true
        };

      case LOG_IN_FAILURE:
        return {
          ...state,
          error: action.payload,
          loggingIn: false,
          success: false
        };

      case FIND_USER_START:
          return {
            ...state,
            findingUser: true,
            error: null,
            success: false
          };
    
      case FIND_USER_SUCCESS:
          return{
              ...state,
              error: null,
              findingUser: false,
              user: action.payload,
              success: true
          };
      
      case FIND_USER_FAILURE:
          return {
              ...state,
              error: action.payload,
              findingUser: false,
              success: false,
          }
        
          case ADD_USER_START:
            return {
              ...state,
              addingUser: true,
              error: null,
              success: false
            };
      
        case ADD_USER_SUCCESS:
            return{
                ...state,
                error: null,
                addingUser: false,
                user: action.payload,
                success: true
            };
        
        case ADD_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                addingUser: false,
                success: false,
            }
      
      case GET_RECIPE_BY_ID_START:
        return {
          ...state,
          getRecipeByID: true,
          error: null,
          success: false
        };

      case GET_RECIPE_BY_ID_SUCCESS:
        return {
          ...state,
          error: null,
          getRecipeByID: false,
          recipe: action.payload,
          success: true
        };

      case GET_RECIPE_BY_ID_FAILURE:
        return {
          ...state,
          error: action.payload,
          getRecipeByID: false,
          success: false
        };
    
        case GET_ALL_RECIPES_START:
        return {
          ...state,
          error: null,
          fetchingTitles: true,
          success: false
        };

      case GET_ALL_RECIPES_SUCCESS:
        const tempUniqueTags = ["all"];
        action.payload.recipes.forEach(title => {
          title.tags.forEach(tag => {
            if (!tempUniqueTags.includes(tag)) {
              tempUniqueTags.push(tag);
            }
          });
        });
        console.log("payload", action.payload.recipes)
        return {
          ...state,
          titles: action.payload,
          getAllRecipes: false,
          error: null,
          uniqueTags: tempUniqueTags,
          currentRecipes: action.payload.recipes,
          success: true
        };

      case GET_ALL_RECIPES_FAILURE:
        return {
          ...state,
          error: action.payload,
          getAllRecipes: false,
          success: false
        };

      case ADD_RECIPE_START:
        return {
          ...state,
          error: null,
          addingRecipe: true,
          recipes: action.payload,
          success: false
        };

      case ADD_RECIPE_SUCCESS:
        return {
          ...state,
          error: null,
          addingRecipe: false,
          recipes: action.payload,
          success: true
        };

      case ADD_RECIPE_FAILURE:
        return {
          ...state,
          error: action.payload,
          addingRecipe: false,
          success: false
        };

      case EDIT_RECIPE_START:
        return {
          ...state,
          error: null,
          editingRecipe: true,
          success: false
        };

      case EDIT_RECIPE_SUCCESS:
        return {
          ...state,
          error: null,
          editingRecipe: false,
          recipe: action.payload,
          success: true
        };

      case EDIT_RECIPE_FAILURE:
        return {
          ...state,
          error: action.payload,
          editingRecipe: false,
          success: false
        };

      case DELETE_RECIPE_START:
        return {
          ...state,
          error: null,
          deletingRecipe: true,
          success: false
        };

      case DELETE_RECIPE_SUCCESS:
        return {
          ...state,
          recipes: action.payload,
          deletingRecipe: false,
          error: null,
          success: true
        };
      case DELETE_RECIPE_FAILURE:
        return {
          ...state,
          error: action.payload,
          deletingRecipe: false,
          success: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;