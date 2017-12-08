var express = require('express');
var router = express.Router();
const request = require('request');

/* GET lista todos os clientes. */
router.get('/', function (req, res, next) {
    if (req.session.login) {
       
	   request.post({url: 'http://' + req.session.address + '/api/Clientes/', form: req.session.login}, function (err, response, body) {
            if (err) { res.status(400).send() }
            console.log(JSON.parse(body));
            console.log(err);
            res.render('pages/clientes/index', { clientes: JSON.parse(body) });
        });
    } else {
        res.redirect('/login');
    }
});

/* GET informacao sobre o cliente. */
router.get('/:clienteID', function (req, res, next) {
    if (req.session.login) {
		request.post({ url: 'http://' + req.session.address + '/api/Clientes/' + req.params.clienteID, form: req.session.login }, function (err, response, body) {
            if (err) { res.status(400).send() }
            console.log(err);
			res.render('pages/clientes/show', { cliente: JSON.parse(body) });
		});
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
