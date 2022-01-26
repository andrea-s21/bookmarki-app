const Bookmark = require('../models/bookmark');
const user = require('../models/user');
const User = require('../models/user');

module.exports = {
  index,
  new: newBookmark,
  create,
  show,
  update,
  edit,
  delete: deleteBookmark
}

function deleteBookmark(req, res) {
  Bookmark.findByIdAndDelete(req.params.id, function (err) {
      res.redirect('/bookmarks');
  });
}

function update(req, res) {
  Bookmark.findOneAndUpdate(req.params.id,
    req.body,
    { new: true },
    function (err, bookmark) {
      res.redirect(`/bookmarks/${bookmark._id}`);
    }
  );
}

function edit(req, res) {
  Bookmark.findById(req.params.id, function(err, bookmark) {
    res.render('bookmarks/edit', {bookmark});
    if (err || !bookmark) return res.redirect('/bookmarks');
  });
}

function show(req, res) {
  Bookmark.findById(req.params.id, function (err, bookmark) {
    res.render('bookmarks/show', {bookmark});
  });
}

function create(req, res) {
  req.body.user = req.user._id;
  Bookmark.create(req.body, function (err, bookmark) {
    res.redirect('/bookmarks');
  });
}

function newBookmark(req, res) {
  res.render('bookmarks/new');
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