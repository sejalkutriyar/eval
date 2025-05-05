import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import RecipeTitle from './Recipe_Title';
import Ingredients from './Ingredients';
import CookingTime from './Cooking_Time';
import Steps from './Steps';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateRecipe from './CreateRecipe';
import Recipes from './Recipes';
import RecipeDetails from './RecipeDetails';



function App() {
    const [recipeId, setRecipeId] = useState(1);

    return (
        <div>
            <h1>Recipe App</h1>
            <RecipeTitle recipeId={recipeId} />
            <Ingredients recipeId={recipeId} />
            <CookingTime recipeId={recipeId} />
            <Steps recipeId={recipeId} />
        </div>
    );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
