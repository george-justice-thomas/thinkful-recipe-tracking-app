import React from 'react'

// a function that fills creates an element that has the recipe's data which is stored by using each recipe's key names to fill in the value, also adds a delete button to each recipe on the list
function RecipeDisplay({recipe, index, deleteRecipe}) {
    return (

      <tr key={index}>
          <td>
          {recipe.name}
          </td>
          <td>
          {recipe.cuisine}
          </td>
          <td>
          <img src={recipe.photo} className="scale-down" alt="Tasty Recipe"/>
          </td>
          <td className="content_td">
          <p>
          {recipe.ingredients}
          </p>
          </td>
          <td className="content_td">
          <p>
          {recipe.preparation}
          </p>
          </td>
          <td>
          <button name="delete" onClick={deleteRecipe}>
          Delete
          </button>
          </td>
      </tr>

  );
  
}

export default RecipeDisplay