const express=require('express');
// body parser helps to parse the incoming request body
const bodyParser=require('body-parser');
const connctDB=require('./config/db');

const recipeRoutes = require('./routes/recipeRoutes.routes');

// Load env variables,dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
require('dotenv').config();

// express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.,
const app=express();

// Connect to database
connctDB();//run function in this file()
//
app.use(bodyParser.json());




// Define Routes
app.use('/api/recipes',recipeRoutes);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});