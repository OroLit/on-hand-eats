import React from "react";
import BarcodeNutrition from "../components/BarcodeNutrition";
import AddRecipe from "../components/RecipeAdder/AddRecipe";
import MyRecipe from "../components/MyRecipe";
import Search from "../components/Search";
import './Home.css';

function Home () {
    return (
        <div className="menu">
            <nav className="navigation">
                <ul><AddRecipe /></ul>
                <ul><MyRecipe /></ul>
                <ul><Search /></ul>
                <ul><BarcodeNutrition /></ul>
           </nav>  
        </div>
    )
};

export default Home; 