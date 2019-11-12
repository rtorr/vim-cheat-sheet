var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    locale: 'en',
    languagesMetaData: req.app.get('languagesMetaData'),
    version: req.app.get('packageVersion')
  });
});

module.exports = router;
