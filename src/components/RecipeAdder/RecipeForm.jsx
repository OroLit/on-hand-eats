import React from "react";
import Card from "../../UI/Card";
import './RecipeForm.css';

function RecipeForm() {
    const addRecipeHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card>
            <form onSubmit={addRecipeHandler}>
                <label>Name</label>
                <input type='text' className="input"/>
                <label>Descriptioin</label>
                <input type='text' className="input"/>
                <button type='submit'>Save</button>
            </form>
        </Card>
    )

};

export default RecipeForm;