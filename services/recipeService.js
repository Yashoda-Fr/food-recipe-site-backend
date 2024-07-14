
const model = require('../models/recipeModel')

const addNewRecipe=async (newRecipe)=>{
    await model.insertMany(newRecipe)
    
}


const getAllRecipes = async ()=>{
    return await model.find();
}

const getRecipe = async(id)=>{
    return await model.findById(id);
}

const updateRecipe = async(id,newRecipe)=>{
    await model.findByIdAndUpdate(id,newRecipe);
}

const deleteRecipe=async(id)=>{
    await model.findByIdAndDelete(id)
}


module.exports={
    getAllRecipes,addNewRecipe,getRecipe,updateRecipe,deleteRecipe
}





