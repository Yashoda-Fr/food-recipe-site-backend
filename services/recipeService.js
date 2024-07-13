
const model = require('../models/recipeModel')

const addNewRecipe=async (newRecipe)=>{
    await model.insertMany(newRecipe)
    
}


const getAllRecipes = async ()=>{
    return await model.find();
}


module.exports={
    getAllRecipes,
    addNewRecipe
}





