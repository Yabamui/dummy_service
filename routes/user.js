var express = require('express');
var router = express.Router();
var isSecure = require('./common').isSecure;

router.get('/', isSecure, function(req, res, next) {
  res.send({ message: 'users' });
});

module.exports = router;
