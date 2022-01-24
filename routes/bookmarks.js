var express = require('express');
var router = express.Router();
var bookmarksCtrl = require('../controllers/bookmarks');
var isLoggedIn = require('../config/auth');

router.get('/', bookmarksCtrl.index);
router.get('/new', bookmarksCtrl.new);
router.get('/:id', bookmarksCtrl.show);
router.post('/', bookmarksCtrl.create);
router.get('/:id/edit', bookmarksCtrl.edit);
router.put('/:id', bookmarksCtrl.update);
router.delete('/bookmarks/:id', bookmarksCtrl.delete);



module.exports = router;