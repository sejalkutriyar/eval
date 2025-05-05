const mongoose = require('mongoose');
const { default: CookingTime } = require('../../Frontend/src/Cooking_Time');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    steps: {
        type: [String],
        required: true,
    },
    CookingTime: {
        type: Number,
        required: true,
    },  
});
module.exports = Recipe;
const Recipe = mongoose.model('Recipe', recipeSchema);
