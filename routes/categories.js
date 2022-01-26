var express = require('express');
var router = express.Router();
var isLoggedIn = require('../config/auth');
var categoriesCtrl = require('../controllers/bookmarks');

router.use(isLoggedIn);

//router.get('/', categoriesCtrl.index);
router.post('/:category/bookmarks/:id', categoriesCtrl.create);

module.exports = router;