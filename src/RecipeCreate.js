import React, { useState } from "react";

//We call the createRecipe prop that we passed down from "/.App.js"
function RecipeCreate({createRecipe}) {
  //create an object that has the same input keys as the form element, but leave each key blank. This will act as out initial state for our form
  const initialFormState = {
        name: "",
        cuisine: "",
        photo:"",
        ingredients:"",
        preparation: "",
  }
  /*Create an state, formData, and a function that changes the state, setFormData, 
  and use the spread operator to give it the initial value of initialFormState( a blank form)*/
  const [formData, setFormData] = useState({...initialFormState});
 /*Create a function changeHandler, that takes an element the user interacts with, target, 
 in this case the form, and by tracking what field the user is entering information on using it's name key, 
 it updates it upon each new input the user adds*/
  const changeHandler = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  }
/* a function that when called, prevents the website from just reloading upon submission using preventDefault, 
calls CreateRecipe using the current state of the form, and adds the newly entered recipe via the information
 gathered in the form, and then sets the form back to its intial state, using setFormDatawith a state of initialFormState*/  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData)
    setFormData({...initialFormState})
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                  type="text"
                  name="name"
                  id="name" 
                  placeholder="Name"
                  onChange={changeHandler}
                  value={formData.name}
                  required
                  />
                  </td>
            <td>
              <input type="text"
                  name="cuisine"
                  id="cuisine"
                  placeholder="Cuisine"
                  onChange={changeHandler}
                  value={formData.cuisine}
                  required
                  />
                  </td>
             <td>
              <input type="text"
                   name="photo"
                   id="photo"
                   placeholder="URL"
                   onChange={changeHandler}
                   value={formData.photo} 
                   required
                   /> 
                   </td>
             <td>
              <textarea
                   type="text"
                   name="ingredients"
                   id="ingredients"
                   placeholder="Ingredients"
                   onChange={changeHandler}
                   value={formData.ingredients}
                   required
                   />
                   </td>
            <td>
              <textarea
                  type="text"
                  name="preparation"
                  id="preparation"
                  placeholder="Preparation"
                  onChange={changeHandler}
                  value={formData.preparation}
                  required
                  />
                  </td>
            <td>
              <button type="submit" >
                Create
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
