var express = require('express');
var router = express.Router();
const request = require('request');

/* GET lista todos artigos. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  request('http://192.168.1.149:49822/api/artigos/',{json:true},function(err, response, body)
=======
  request('http://localhost:49822/api/artigos/',{json:true},function(err, response, body)
>>>>>>> 015a0ac31968c6dd96b551dda6ad1ba47f9b6c0c
  {
    if(err) {res.status(400)}
    console.log(body);
    console.log(err);
    res.render('pages/artigos/index', {artigos: body});
  })
});


/* GET informacao sobre artigo. */
router.get('/:codArtigo', function (req, res, next) {
    request('http://localhost:49822/api/artigos/' + req.params.codArtigo, { json: true }, function (err, response, body) {
        if(err) {res.status(400)}
        console.log(body);
        console.log(err);
        res.render('pages/artigos/show', { artigo: body });
    })
});

module.exports = router;
