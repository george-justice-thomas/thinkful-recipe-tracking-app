import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  //Create a current state recipes, and a function that will change state, setRecipes, that use the information in RecipeData as it's initial state
  const [recipes, setRecipes] = useState(RecipeData);
 /*Create a function, createRecipe, that uses an argument of newRecipe, and calls setRecipes, 
 which uses an argument of currentRecipe, to create a new array, of all current recipes in addition to the newly created recipe*/ 
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipe) => [...currentRecipe, newRecipe]);
  }
 /*deleteRecipe uses an argument of indexToDelete to find the indexed number of the recipe we want to delete,
  and calls setRecipes using currentRecipe as it's argument, so inside of our current recipes list, we want to 
  filter using a singular item, recipe, and it's index. We filter it using the index of the array, and the index number of the recipe that the user deletes*/
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipe) => (
    currentRecipe.filter((recipe, index) => index !== indexToDelete)
    ));
  }
/*Return a container labeled App, with a header element,
an h1 element for our heading, a RecipeList element, which we pass the recipes state
 and the deleteRecipe function by adding keys and making each value the proper prop, so that we may use them in the RecipeList file. 
 And RecipeCreate, which we pass the recipeCreate function down to so we can use it in the RecipeCreate file. We pass them through curly braces 
 as they are JSX elements*/
return (
    <div className="App">
      <header>
        <h1>
          Delicious Food Recipes
          </h1>
          </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;