// import modules
import express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let request = require('request');


//MODEL
let Recipe = mongoose.model('Recipe', {
  Recipe:{
    type:String,
  },
});

//save Recipe
router.post('/recipe', function(req, res) {
  request('http://food2fork.com/api/search?key=75cf831690ffc9d6e14a46dd5b3c8c13&q='+req.body,
    function (error, response, body) {
      console.log(response)
      let type = JSON.parse(body)
      if (type.name === req.body.type) {
        res.send(type);
      } else {
        console.log(error)
        res.send({message:'recipe not found'})
      }
    })
  });



// EXPORT ROUTER
export = router;
