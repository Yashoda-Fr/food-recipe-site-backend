
const recipeService = require('../services/recipeService');



const getAllRecipes = async (req, res) => {

    try{
        const recipes = await  recipeService.getAllRecipes();

        //if empty 
        if(recipes.length === 0){
            return res.status(404).json({message:'No recipes found'});
        }

        //logic 
        res.status(200).json(recipes);
    }
    catch{
        res.status(500).json({message:err.message});
    }
}



module.exports = {
    getAllRecipes
}