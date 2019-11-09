var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { languagesMetaData: req.app.get('languagesMetaData') });
});

module.exports = router;
