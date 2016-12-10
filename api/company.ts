// import modules
import express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let crypto = require('crypto');
let jwt= require('jsonwebtoken');
let request = require('request');
let ipAddress = require('node-local-ip-address')();

//API CLEARBIT
router.post('/recipe', function(req, res) {
// request('https://sk_792329b163b90c6db62cfb69425122dc@company.clearbit.com/v2/companies/find?domain='+req.body.domain,
// function (error, response, body) {
//   let data = JSON.parse(body)
//   if (data.name === req.body.company) {
//     res.send(data);
//   } else {
//     console.log(error)
//     res.send({message:'company not found'})
//   }
// })
});



// EXPORT ROUTER
export = router;
