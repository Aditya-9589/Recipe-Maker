import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

//this page is the home page of the application, it fetches recipes from an API and displays them in a grid layout using RecipeCard components.
const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => setRecipes(data.recipes))
            .catch((err) => console.error("Error fetching recipes:", err));
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-700">
                🍲 Delicious Recipes
            </h2>

            {/* Grid with 3 cards per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
