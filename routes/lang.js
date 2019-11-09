var express = require('express');
var router = express.Router();

router.get('/:locale/', function(req, res) {
  res.render('index', {
    locale: req.params.locale,
    languagesMetaData: req.app.get('languagesMetaData')
  });
});

module.exports = router;
