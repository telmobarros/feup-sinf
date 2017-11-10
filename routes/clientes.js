var express = require('express');
var router = express.Router();

/* GET lista todos os clientes. */
router.get('/', function (req, res, next) {
    if (req.session.login) {
        res.render('pages/clientes/index');
    } else {
        res.redirect('/login');
    }
});

/* GET informacao sobre o cliente. */
router.get('/:clienteID', function (req, res, next) {
    if (req.session.login) {
        res.render('pages/clientes/show');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
