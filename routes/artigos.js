var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://192.168.1.149:49822/api/artigos/',{json:true},function(err, response, body)
  {
    //if(err)
      //{res.status(400)};
    console.log(body);
    console.log(err);
    res.render('pages/artigos/index', {artigos: body});
  })
});

module.exports = router;
