import Card from "../../UI/Card";
import classes from './RecipeList.module.css';
import { useEffect, useState } from "react";
import Wrapper from "../Helpers/Wrapper";

function RecipeList(props) {

  const [recipeList, setRecipeList] = useState([]);

/* useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const api = await fetch(`https://api.edamam.com/api/recipes/v2/recipe-finder?type=public&app_apiKey=${process.env.REACT_APP_APPI_KEY}&number=9`)
    const data = await api.jason();
    setRecipeList(data.recipes);
    console.log(data.recipes);
  }*/

  return (
    <div>
      {recipeList.map((recipe) => {
        return (
          <Wrapper key={recipe.id}>

            <h3>My recipes</h3>
            {recipeList.map((recipe) => {
              return (
                <Card className={classes.recipe}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              );
            })}

          </Wrapper>
        );
      })}
    </div>
  );
};

export default RecipeList;