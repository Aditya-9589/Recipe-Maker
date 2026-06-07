import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Timer from "../components/Timer";

const RecipeDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [startCooking, setStartCooking] = useState(false);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data))
            .catch((err) => console.error("Error fetching recipe:", err));
    }, [id]);

    if (!recipe) return <p className="text-center mt-10 text-gray-600">Loading recipe...</p>;

    const totalTime = (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-6">
            {/* Back button */}
            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-5 py-2 bg-gray-200 rounded-full text-sm font-semibold hover:bg-gray-300 transition"
            >
                ⬅ Back
            </button>

            {/* Hero Image */}
            <div className="relative w-full max-w-4xl mx-auto">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
                <h2 className="absolute bottom-5 left-5 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                    {recipe.name}
                </h2>
            </div>

            {/* Tags */}
            <div className="flex gap-3 justify-center mt-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {recipe.cuisine}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {recipe.difficulty}
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    Serves {recipe.servings}
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    ⭐ {recipe.rating}
                </span>
            </div>

            {/* Ingredients */}
            <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">🛒 Ingredients</h3>
                <ul className="space-y-2">
                    {recipe.ingredients.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                            <span className="text-green-500 mr-2">✔</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Instructions */}
            <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">👩‍🍳 Instructions</h3>
                <ol className="space-y-4">
                    {recipe.instructions.map((step, i) => (
                        <li key={i} className="flex items-start">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white font-bold mr-3">
                                {i + 1}
                            </span>
                            <p className="text-gray-700">{step}</p>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Timer Section */}
            <div className="text-center mt-10">
                {!startCooking ? (
                    <button
                        onClick={() => setStartCooking(true)}
                        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition"
                    >
                        🍳 Start Cooking ({totalTime} mins)
                    </button>
                ) : (
                    <Timer
                        minutes={totalTime}
                        onFinish={() => alert("Food is ready! 🍽️")}
                        onStop={() => navigate("/home")}
                    />
                )}
            </div>
        </div>
    );
};

export default RecipeDetailPage;
