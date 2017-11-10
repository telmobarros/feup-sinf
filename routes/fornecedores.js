var express = require('express');
var router = express.Router();

/* GET lista todos os fornecedores. */
router.get('/', function (req, res, next) {
    if (req.session.login) {
        res.render('pages/fornecedores/index');
    } else {
        res.redirect('/login');
    }
});

/* GET informacao sobre o fornecedor. */
router.get('/:fornecedorID', function (req, res, next) {
    if (req.session.login) {
        res.render('pages/fornecedores/show');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
