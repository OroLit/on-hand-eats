import React from "react";
import './Home.css';
import { Link } from "react-router-dom";


function Home() {
    /* const addRecipeHandler = recipe => {
         console.log(recipe)
     }*/


    return (
        <div className="menu">
            <nav className="navigation">
                <ul>
                    <li>
                        <CustomLink to='./SearchForm'>Search</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='/RecipeForm'>AddRecipe</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='/myRecipe'>MyRecipe</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='/barcodeNutrition'>BarcodeNutrition </CustomLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === to ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Home; 