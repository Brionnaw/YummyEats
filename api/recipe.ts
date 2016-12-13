// import modules
import express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');


//MODEL
let Recipe = mongoose.model('Recipe', {
  Recipe:{
    type:String,
  },
});

//save Recipe
router.post('/recipe', function(req, res) {
  console.log('hit')
});



// EXPORT ROUTER
export = router;
