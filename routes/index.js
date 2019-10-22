var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//add an array of objects
  res.render('index', {
      title: 'My Friends',
      friends: [
        { name: 'Mariela'},
        { name: 'Martin'},
        { name: 'Cody'},
        { name: 'Nick'},
        { name: 'Ozwin'},
        { name: 'Donovan'}
      ]});
  });
  module.exports = router;
