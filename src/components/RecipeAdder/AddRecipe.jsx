import React from "react";
import './addRecipe.css'
import Button from "../../UI/Button"
import RecipeForm from "./RecipeForm"
import { useState  } from "react";

function AddRecipe(props) {
    const [isEditing, setIsEditing] = useState(false);

    const saveRecipeDataHandler = (enteredRecipeData) => {
        const recipeData = {
            ...enteredRecipeData,
            id: Math.random().toString()
        };
      props.onAddRecipe(recipeData);
      setIsEditing(false);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return(
        <div>
        {!isEditing &&
        <Button onClick={startEditingHandler}>Add recipe</Button>}
       
        {!isEditing && 
        <RecipeForm 
        onSaveRecipeData={saveRecipeDataHandler}
        onCancel={stopEditingHandler} />}
        </div>
    )
}

export default AddRecipe;