
const model = require('../models/recipeModel')



const getAllRecipes = async ()=>{
    return await model.find();
}


module.exports={
    getAllRecipes
}



