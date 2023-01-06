import React from "react";
import Card from "../../UI/Card";
import classes from './RecipeList.module.css'

function RecipeList(props) {
    return (
        <Card className={classes.recipe}>
        <ul>
          {props.recipe.map((recipe) => (
            <li key={recipe.id}>
              {recipe.name} ({recipe.desricption})
            </li>
          ))}
      </ul>
      </Card>
    );
};

export default RecipeList;