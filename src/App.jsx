import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import AddRecipe from './components/RecipeAdder/AddRecipe';
import MyRecipe from './components/MyRecipe';
import BarcodeNutrition from './components/BarcodeNutrition';
//import React, { useState } from 'react';


function App() {
  /* const [recipeList, setRecipeList] = useState([]);
 
   const addRecipeHandler = (recipeName, recipeDescription, recipeNote, recipeNutrition) => {
     setRecipeList((prevRecipeList) => {
       return [...prevRecipeList, { 
         name: recipeName, 
         description: recipeDescription,
         note: recipeNote,
         Nutrition: recipeNutrition, id: Math.random().toString() }];
     });
   }
   onAddRecipe={addRecipeHandler}
   recipe={recipeList}
   */

  return (
    <div className="app">
      <section id="menu-bar">
        <header id="logo">On Hand Eats</header>
        <Home />
        <div className='container'>
          <Routes>
            <Route path='/Search' element={<Search />} />
            <Route path='/RecipeForm' element={<AddRecipe />} />
            <Route path='/MyRecipe' element={<MyRecipe />} />
            <Route path='/BarcodeNutrition' element={<BarcodeNutrition />} />
          </Routes>
        </div>
      </section>
    </div>
  )
}

export default App
