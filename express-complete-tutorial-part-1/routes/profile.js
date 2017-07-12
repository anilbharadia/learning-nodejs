var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    var name = req.query.name;

    res.write('return profile json here\n');

    res.write('name = '+ name);

    res.end();
});


module.exports = router;