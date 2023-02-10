import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";
import Button from "../UI/button";


function Home() {
    /* const addRecipeHandler = recipe => {
         console.log(recipe)
     }*/


    return (
        <div className="menu">
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to='/'><Button>Home</Button></Link>
                    </li>
                    <li>
                        <Link to='./searchform'><Button>Search</Button></Link>
                    </li>
                    <li>
                        <Link to='/addrecipe'><Button>AddRecipe</Button></Link>
                    </li>
                    <li>
                        <Link to='/myRecipe'><Button>MyRecipe</Button></Link>
                    </li>
                    <li>
                        <Link to='/barcodeNutrition'><Button>BarcodeNutrition</Button></Link>
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