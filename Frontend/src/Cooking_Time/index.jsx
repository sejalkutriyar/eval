import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function CookingTime({ recipeId }) {
    const [cookingTime, setCookingTime] = useState(null);
    
    useEffect(() => {
        const fetchCookingTime = async () => {
        try {
            const response = await fetch(`http://localhost:5000/recipes/${recipeId}`);
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setCookingTime(data.cooking_time);
        } catch (error) {
            console.error("Error fetching cooking time:", error);
        }
        };
    
        fetchCookingTime();
    }, [recipeId]);
    
    return <div>{cookingTime !== null ? `${cookingTime} minutes` : "Loading..."}</div>;
}
export default CookingTime;