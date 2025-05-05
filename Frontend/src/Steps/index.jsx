import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Steps({ recipeId }) {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const fetchSteps = async () => {
            try {
                const response = await fetch(`http://localhost:5000/recipes/${recipeId}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setSteps(data.steps);
            } catch (error) {
                console.error("Error fetching steps:", error);
            }
        };

        fetchSteps();
    }, [recipeId]);

    return (
        <div>
            <h2>Steps</h2>
            <ol>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}
export default Steps;