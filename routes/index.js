var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.param('type', function(req, res, next, type) { req.type = type; return next(); });

router.get('/player/:type', function(req, res) {
  res.render(req.type);
});


module.exports = router;
