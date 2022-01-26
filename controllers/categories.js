const Bookmark = require('../models/bookmark');
const Category = require('../models/category');

module.exports = {
  create
}

function create(req, res) {
  req.body.user = req.user._id;
  Category.create(req.body, function (err, category) {
    res.redirect('/bookmarks');
  });
}

