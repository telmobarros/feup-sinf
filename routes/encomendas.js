var express = require('express');
var router = express.Router();

/* GET lista todos as encomendas. */
router.get('/', function (req, res, next) {
    if (req.session.login) {
        res.render('pages/encomendas/index');
    } else {
        res.redirect('/login');
    }
});

/* GET informacao sobre a encomenda. */
router.get('/:encomendaID', function (req, res, next) {
    if (req.session.login) {
        res.render('pages/encomendas/show');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
