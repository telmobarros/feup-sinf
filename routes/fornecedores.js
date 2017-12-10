var express = require('express');
var router = express.Router();
const request = require('request');

/* GET lista todos os fornecedores. */
router.get('/', function (req, res, next) {
    if (req.session.login) {
		request.post({url: 'http://' + req.session.address + '/api/Fornecedor/', form: req.session.login}, function (err, response, body) {
            if (err) { res.status(400).send() }
			console.log(JSON.parse(body));
			console.log(err);
			res.render('pages/fornecedores/index', { fornecedores: JSON.parse(body) });
		});
    } else {
        res.redirect('/login');
    }
});

/* GET informacao sobre o fornecedor. */
router.get('/:fornecedorID', function (req, res, next) {
    if (req.session.login) {
		request.post({ url: 'http://' + req.session.address + '/api/Fornecedor/' + req.params.fornecedorID, form: req.session.login }, function (err, response, body) {
            if (err) { res.status(400).send() }
            //console.log(body);
            //console.log(err);
            var fornecedor = JSON.parse(body);
            fornecedor.compras = [];
            fornecedor.artigos = [];
            res.render('pages/fornecedores/show', { fornecedor: fornecedor });
		});
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
