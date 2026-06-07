import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
            <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold text-indigo-700">{recipe.name}</h3>
                <p className="text-sm text-gray-500">
                    {recipe.cuisine} • {recipe.difficulty}
                </p>
                <p className="text-sm mt-2 text-yellow-600">
                    ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
                </p>
            </div>
        </div>
    );
};

export default RecipeCard;
