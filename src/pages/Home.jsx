import React from "react";
import BarcodeNutrition from "../components/BarcodeNutrition";
import AddRecipe from "../components/AddRecipe";
import MyRecipe from "../components/MyRecipe";
import './Home.css';

function Home () {
    return (
        <div className="menu">
            <nav className="navigation">
                <ul><button className="button"><AddRecipe /></button></ul>
                <ul><button className="button"><MyRecipe /></button></ul>
                <ul></ul><button className="button"><BarcodeNutrition /></button>
           </nav>  
        </div>
    )
};

export default Home;