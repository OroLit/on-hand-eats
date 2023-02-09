import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "../UI/button";


function SearchForm() {
    const [enteredIngredient, setEnteredIngredient] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const ingredientChangeHandler = (event) => {
        setEnteredIngredient(event.target.value)
    }
    const getRecipe = () => {
        setIsLoading(true);
        axios.get('https://api.edamam.com/api/recipes/v2/recipe.json')
            .then(res => {
                setEnteredIngredient(res.data.content)
            }).catch(err => {
                console.log(err)
            })
            setIsLoading(false)
    }
    //Need to add the fetch method for the SerchBar input
    useEffect(() => {
        fetchTasks();
    }, [])


    /*
    const [recipe, setRecipe] = useState([]);
   const [isEditing, setIsEditing] = useState(false);
   const [tasks, setTasks] = useState([])

   const transformTasks = tasksObj => {
   const loadedTasks = [];
    
    function getRecipeHandler() {
       fetch('https://api.edamam.com/api/recipes/v2/recipe.json').then(response => {
           return response.json();
       }).then(data => {
           data.hit;
       })
     }
      const [tasks, setTasks] = useState([])

   const transformTasks = tasksObj => {
   const { isLoading, error, sendRequest: fetchTasks } = useHttp(
   { url: 'https://api.edamam.com/api/recipes/v2/Recipe_Finder?type=public&app_id=${My_Recipe_finder}&app_key=${ingredient_Recipe}'},
   transformTasks
   );

       const loadedTasks = [];
const { isLoading, error, sendRequest: fetchTasks } = useHttp(
   { url: 'https://api.edamam.com/api/recipes/v2/Recipe_Finder?type=public&app_id=${My_Recipe_finder}&app_key=${ingredient_Recipe}'},
   transformTasks
   );
   for (const taskKey in tasksObj) {
       loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text })
   }
   setTasks(loadedTasks);
   };
     const { isLoading, error, sendRequest: fetchTasks } = useHttp(
   { url: 'https://api.edamam.com/api/recipes/v2/Recipe_Finder?type=public&app_id=${My_Recipe_finder}&app_key=${ingredient_Recipe}'},
   transformTasks
   );
    const data = await response.json()
   */

    return (
        <form>
            <div className="search-recipe__controls">
                <div className="search-recipe__control">
                    <label>Search recipe</label>
                    <input
                        type='text'
                        value={enteredIngredient}
                        onChange={ingredientChangeHandler}
                        className="Searchbar"
                        placeholder="Enter ingredient"
                        onCancel={stopEditingHandler}
                        error={error}
                        onGet={getRecipe}
                        items={tasks} />
                </div>
                <Button loading={isLoading}>Search</Button>
            </div>
        </form>
    );
}

export default SearchForm;
