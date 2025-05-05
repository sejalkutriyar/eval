require('./db.js');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const recipeRoutes = require('./Routes/recipe.js');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/recipes', recipeRoutes);
app.get('/', (req, res) => {
    res.send('API is running...');
});
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

