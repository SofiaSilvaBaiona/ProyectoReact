import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api1 = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=vegetable');
        setRecipes(response.data.meals);
      } catch (error) {
        console.error('Error fetching the recipes data', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Vegetable Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>{recipe.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Api1;
