import Home from './pages/Home';
import './App.css';
import RecipeList from './components/RecipeAdder/RecipeList';
import React, { useState } from 'react';
import RecipeForm from './components/RecipeAdder/RecipeForm';

function App() {
  const [recipeList, setRecipeList] = useState([]);
 // const YOUR_APP_ID = '32094c0f'
 // const YOUR_APP_KEY = '7bdff98b8099c04bc7aa83cccbc70f04'
  const addRecipeHandler = (recipeName, recipeDescription) => {
    setRecipeList((prevRecipeList) => {
      return [...prevRecipeList, { name: recipeName, Desription: recipeDescription, id: Math.random().toString() }];
    });
  }
  

  /*async function getRecipes () {
    let result = await fetch('https://api.edamam.com/api/recipes/v2/recipe-finder?type=public&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY'
     );
    console.log(result.data)
  }*/

  return (
    <div className="app">
      <section id="menu-bar">
        <header id="logo">On Hand Eats</header>
          <Home  />
          <RecipeForm onAddRecipe={addRecipeHandler}/>
          <RecipeList recipe={recipeList}/>
        </section> 
      </div>
  )
}

export default App
