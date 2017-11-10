var express = require('express');
var router = express.Router();

/* GET lista todos as vendas. */
router.get('/', function (req, res, next) {
    if (req.session.login) {
        res.render('pages/vendas/index');
    } else {
        res.redirect('/login');
    }
});

/* GET informacao sobre a venda. */
router.get('/:vendaID', function (req, res, next) {
    if (req.session.login) {
        res.render('pages/vendas/show');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
