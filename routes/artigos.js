var express = require('express');
var router = express.Router();
const request = require('request');

/* GET lista todos artigos. */
router.get('/', function (req, res, next) {
    if (req.session.login) {
        console.log(req.session.login);
        request.post({url: 'http://' + req.session.address + '/api/artigos/', form: req.session.login}, function (err, response, body) {
            if (err) { res.status(400).send() }
            console.log(JSON.parse(body));
            console.log(err);
            res.render('pages/artigos/index', { artigos: JSON.parse(body) });
        });
    } else {
        res.redirect('/login');
    }
});


/* GET informacao sobre artigo. */
router.get('/:codArtigo', function (req, res, next) {
    if (req.session.login) {
        request.post({ url: 'http://' + req.session.address + '/api/artigos/' + req.params.codArtigo, form: req.session.login }, function (err, response, body) {
            if (err) { res.status(400).send() }
            //console.log(body);
            //console.log(err);
            var artigo = JSON.parse(body);
            artigo.vendas = [];
            artigo.compras = [];
            res.render('pages/artigos/show', { artigo: artigo });
        })
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
