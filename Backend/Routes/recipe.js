const express = require('express');
const router = express.Router();
const Recipe = require('../model/Recipe');

// POST API to add a new recipe
router.post('/', async (req, res) => {
    try {
      const recipe = new Recipe(req.body);
      await recipe.save();
      res.status(201).json(recipe);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
// GET API to fetch all recipes  
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// GET API to fetch a recipe by filter
router.get('/filter', async (req, res) => {
    try {
        const { title, ingredients, cooking_time } = req.query;
        const filter = {};
        if (title) {
            filter.title = { $regex: title, $options: 'i' };
        }
        if (ingredients) {
            filter.ingredients = { $regex: ingredients, $options: 'i' };
        }
        if (cooking_time) {
            filter.cooking_time = cooking_time;
        }
        const recipes = await Recipe.find(filter);
        res.json(recipes);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// PUT API to update a recipe
router.put('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        recipe.title = req.body.title || recipe.title;
        recipe.description = req.body.description || recipe.description;
        recipe.ingredients = req.body.ingredients || recipe.ingredients;
        recipe.steps = req.body.steps || recipe.steps;
        recipe.cooking_time = req.body.cooking_time || recipe.cooking_time;
        const updatedRecipe = await recipe.save();
        res.json(updatedRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// DELETE API to delete a recipe
router.delete('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        await recipe.remove();
        res.json({ message: 'Recipe deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
