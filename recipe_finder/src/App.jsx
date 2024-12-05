import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (query) => {
    const API_URL = `https://api.edamam.com/search?q=${query}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.hits.length === 0) {
        setError("No recipes found. Try another search!");
      } else {
        setRecipes(data.hits);
      }
    } catch (err) {
      setError("Failed to fetch recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <SearchBar fetchRecipes={fetchRecipes} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;