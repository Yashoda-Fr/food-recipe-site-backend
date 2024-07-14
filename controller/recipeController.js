
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

const getRecipe = async (req,res)=>{
    try{
        const id=req.params.id

        if(!id){
            return res.status(400).json({message:'Please provide recipe id.'});

        }

        const recipe = await recipeService.getRecipe(id);

        if(!recipe){
            return res.status(404).json({message:'No recipe found'});
        }

        res.status(200).json(recipe);
    }
    catch{
        res.status(500).json({message:err.message});
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

const updateRecipe =async (req,res)=>{
    try{
        const id=req.params.id

        const{title,description,ingredients} =req.body;
        console.log({title,description,ingredients});

        
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

        await recipeService.updateRecipe(id,newRecipe);

        res.status(202).json({message:'Recipe Updated.'});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};

const deleteRecipe = async(req,res) =>{
    try{
        const id=req.params.id

        await recipeService.deleteRecipe(id);

        res.status(202).json({message:'Recipe deleted.'});

    }
    catch(err)
    {
        res.status(500).json({message:err.message});

    }
}



module.exports = {
    getAllRecipes,CreateRecipe,getRecipe,updateRecipe,deleteRecipe
}