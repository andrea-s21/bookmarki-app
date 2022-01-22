var express = require('express');
const passport = require('passport');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    promt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/home',
    failureRedirect: '/home'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/home');
});

module.exports = router;
