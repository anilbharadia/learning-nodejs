var express = require('express');
var router = express.Router();

var session;

/* GET home page. */
router.get('/', function(req, res, next) {

  session = req.session;

  session.emailId = 'anil.bharadia@gmail.com';
  session.id = 1000;

  res.render('index', { title: 'Express' });
});

module.exports = router;
