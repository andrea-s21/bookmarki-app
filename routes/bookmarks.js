var express = require('express');
var router = express.Router();
var isLoggedIn = require('../config/auth');
var bookmarksCtrl = require('../controllers/bookmarks');

router.get('/', bookmarksCtrl.index);
router.get('/new', bookmarksCtrl.new);
router.get('/:id', bookmarksCtrl.show);
router.post('/', bookmarksCtrl.create);
router.get('/:id/edit', bookmarksCtrl.edit);
router.put('/:id', bookmarksCtrl.update);
router.delete('/:id', bookmarksCtrl.delete);



module.exports = router;