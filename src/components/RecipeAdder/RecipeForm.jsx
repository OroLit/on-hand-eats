import React, { useState } from "react";
import Card from "../../UI/Card";
import classes from './RecipeForm.module.css';
import Button from "../../UI/button";



function RecipeForm(props) {
    const [enteredRecipeName, setEnteredRecipeName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    const addRecipeHandler = (event) => {
        event.preventDefault();
        if (enteredRecipeName.trim().length ===0 || enteredDescription.trim().length ===0) {
            return;
        }
        props.onAddRecipe(enteredRecipeName, enteredDescription);
        setEnteredRecipeName('')
        setEnteredDescription('')
    }
    
    const recipeChangeHandler = (event) => {
        setEnteredRecipeName(event.target.value)
    }
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value)
    }

    

    return (
        <Card className={classes.input}>
            <form onSubmit={addRecipeHandler}>
                <label>Name</label>
                <input 
                type='text' 
                className="input"
                value={enteredRecipeName} 
                onChange={recipeChangeHandler} 
                />
                <label>Descriptioin</label>
                <input 
                type='text' 
                className="input"
                value={enteredDescription} 
                onChange={descriptionChangeHandler}
                />
                <Button type='submit'>Save</Button>
            </form>
        </Card>
    )

};

export default RecipeForm;