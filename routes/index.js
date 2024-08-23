var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/juristi', function (req, res, next) {
  res.render("chatbot");
});

router.get('/hire-a-lawyer', function (req, res, next) {
  res.render("hire-a-lawyer");
});

router.get('/hire-a-lawyer/form', function (req, res, next) {
  res.render("hire-a-lawyer-form");
});

router.get('/dashboard', function (req, res, next) {
  res.render('lawyer-dashboard');
});

module.exports = router;
