import React from "react";
import { useState } from "react";

function SearchForm() {
    const [enteredIngredient, setEnteredIngredient] = useState('')

    const ingredientChangeHandler = (event) => {
        setEnteredIngredient(event.target.value)
    }

return (
    <form>
        <div className="search-recipe__controls">
            <div className="search-recipe__control">
                <label>Search recipe</label>
                <input
                type='text'
                value={enteredIngredient}
                onChange={ingredientChangeHandler} />

            </div>
        </div>
    </form>
);
}

export default SearchForm;
