// import modules
import express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let request = require('request');

//model
let Recipe = mongoose.model('Recipe', {
  Recipe:{
    type:String,
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
      let type = JSON.parse(body)
      if (type.name === req.body.recipe) {
        res.send(type);
      } else {
        console.log(error)
        res.send({message:'recipe not found'})
      }
    })
  });

// export router
export = router;
