
const recipeService = require('../services/recipeService');

const CreateRecipe = async(req,res)=>{
    try{
        const{title,description,ingredients} =req.body;

        //validate required field
        if(!title || !description || !ingredients){
            return res.status(400).json({message:'All fiels are mandotary.'})
        }

        //create a new recipe object
        const newRecipe={
            title,
            description,
            ingredients
        };

        await recipeService.addNewRecipe(newRecipe);

        res.status(201).json({message:"inserted successfully."})

    }catch(err){
        res.status(500).json({ message: err.message });

    }
}

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
    getAllRecipes,
    CreateRecipe
}