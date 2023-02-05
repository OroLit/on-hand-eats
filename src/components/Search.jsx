import React, { useState, useEffect } from "react";
import Button from "../UI/button";
import useHttp from '../Hooks/use-http'

function Search() {
    /* function getRecipeHandler() {
            fetch('https://api.edamam.com/api/recipes/v2/recipe.json').then(response => {
                return response.json();
            }).then(data => {
                data.hit;
            })
        }
        const [enteredIngredient, setEnteredIngredient] = useState('')
       const ingredientChangeHandler = (event) => {
        setEnteredIngredient(event.target.value)
        //Need to add the fetch method for the SerchBar input
         //const data = await response.json()
    }
     
       const getRecipes = async () => {
         const api = await fetch(
           `https://api.edamam.com/api/recipes/v2/recipe-finder?type=public&app_apiKey=${process.env.REACT_APP_APPI_KEY}&number=9`)
         const data = await api.jason();
         setRecipeList(data.recipes);
         console.log(data.recipes);
       }
       const My_Recipe_finder = "32094c0f";
       const ingredient_Recipe = "7bdff98b8099c04bc7aa83cccbc70f04"
       let url = `https://api.edamam.com/api/recipes/v2/Recipe_Finder?type=public&app_id=${My_Recipe_finder}&app_key=${ingredient_Recipe}`
       */
   
    return (
        <div>
            <Button>Search</Button>
        </div>
    )
}

export default Search;