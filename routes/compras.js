var express = require('express');
var router = express.Router();

/* GET lista todas as compras. */
router.get('/', function (req, res, next) {
    if (req.session.login) {
        res.render('pages/compras/index');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
