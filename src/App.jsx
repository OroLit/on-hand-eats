import Nav from './pages/Nav'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import AddRecipe from './components/RecipeAdder/AddRecipe';
import MyRecipe from './components/MyRecipe';
import BarcodeNutrition from './components/BarcodeNutrition';
import ErrorBoundary from './components/ErrorBoundry';
import Home from './components/Home';

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
        <ErrorBoundary><Nav /></ErrorBoundary>
        <div className='container'>
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/searchform' element={<Search />} />
            <Route path='/addrecipe' element={<AddRecipe />} />
            <Route path='/myrecipe' element={<MyRecipe />} />
            <Route path='/Barcodenutrition' element={<BarcodeNutrition />} />
          </Routes>
        </div>
      </section>
    </div>
  )
}

export default App
