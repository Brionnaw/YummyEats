// import modules
import express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let request = require('request');

//model
let Recipe = mongoose.model('Recipe', {
  Recipe:{
    recipe:String,
  },
});
//food2fork api
router.post('/recipe', function(req, res) {
  let newRecipe = new Recipe ({
      recipe:req.body.recipe
  })
  request('http://food2fork.com/api/search?key=75cf831690ffc9d6e14a46dd5b3c8c13&q='+req.body.recipe,
    function (error, response, body) {
      console.log(body)
      let recipe = JSON.parse(body)
      if (recipe.name === req.body.recipe) {
        res.send(recipe);
      } else {
        console.log(error)
        res.send({message:'recipe not found'})
      }
    })
  });

// export router
export = router;
