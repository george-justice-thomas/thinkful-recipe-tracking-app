import React from "react";
import RecipeDisplay from "./RecipeDisplay"


// a function used to create a div element that contains a table that holds all the data for the recipes, serves as the structure of the recipe data
function RecipeList({ recipes, deleteRecipe }) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>
              Name
              </th>
            <th>
              Cuisine
              </th>
            <th>
              Photo
              </th>
            <th>
              Ingredients
              </th>
            <th>
              Preparation
              </th>
            <th>
              Actions
              </th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeDisplay
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              recipe={recipe} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;