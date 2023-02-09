import React from "react";
import './Nav.css';
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
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='./searchform'>Search</Link>
                    </li>
                    <li>
                        <Link to='/addrecipe'>AddRecipe</Link>
                    </li>
                    <li>
                        <Link to='/myRecipe'>MyRecipe</Link>
                    </li>
                    <li>
                        <Link to='/barcodeNutrition'>BarcodeNutrition </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

/*function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === to ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}*/

export default Home; 