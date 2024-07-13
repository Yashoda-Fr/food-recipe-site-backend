const express=require('express');
const router=express.Router();
const RecipeController = require('../controller/recipeController')

router.post('/',RecipeController.CreateRecipe);
router.get('/',RecipeController.getAllRecipes);
// router.get('/:id',RecipeController.getRecipe);
// router.put('/:id',RecipeController.updateRecipe);
// router.delete('/:id',RecipeController.deleteRecipe);

module.exports=router;