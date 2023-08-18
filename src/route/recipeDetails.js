import React from "react";
import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
  const location = useLocation();

  const foodRecipe = location.state.item;

  return (
    <div>
      Recipe Details
      <div>id: {foodRecipe.id}</div>
      <div>Food name: {foodRecipe.food}</div>
    </div>
  );
};
export default RecipeDetails;
