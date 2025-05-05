import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


function RecipeTitle({ recipeId }) {
    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');

    useEffect(() => {
        const fetchRecipeTitle = async () => {
            try {
                const response = await fetch(`http://localhost:5000/recipes/${recipeId}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setRecipeTitle(data.title);
                setRecipeDescription(data.description);
            } catch (error) {
                console.error("Error fetching recipe title:", error);
            }
        };

        fetchRecipeTitle();
    }, [recipeId]);

    return (
        <div>
            <h1>{recipeTitle}</h1>
            <p>{recipeDescription}</p>
        </div>
    );
}
export default RecipeTitle;