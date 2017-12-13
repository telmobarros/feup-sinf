var express = require('express');
var router = express.Router();
const request = require('request');
/* GET pagina ganhos. */
router.get('/', function (req, res, next) {
    if (req.session.login) {
        console.log(req.session.login);
        request.post({url: 'http://' + req.session.address + '/api/Ganhos/', form: req.session.login}, function (err, response, body) {
            if (err) { res.status(400).send() }
            console.log(JSON.parse(body));
            console.log(err);
			 
            res.render('pages/ganhos/index', { ganhos: JSON.parse(body) });
        });
    } else {
        res.redirect('/login');
    }
});



module.exports = router;
