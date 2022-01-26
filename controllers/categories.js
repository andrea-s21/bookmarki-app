const Bookmark = require('../models/bookmark');
const Category = require('../models/category');

module.exports = {
  index,
  create
}

function create(req, res) {
  req.body.user = req.user._id;
  Category.create(req.body, function (err, category) {
    res.redirect('/bookmarks/show');
  });
}

function index(req, res) {
  const categories = Bookmark.schema.path('category').enumValues;
  Bookmark.find({})
  .populate('user')
  .sort('category')
  .exec(function(err, bookmarks){
    res.render('bookmarks/index', {bookmarks, categories});
  })
}