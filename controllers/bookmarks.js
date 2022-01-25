const Bookmark = require('../models/bookmark');
const User = require('../models/user');

module.exports = {
  index,
  new: newBookmark,
  create,
  show,
  edit,
  update,
  delete: deleteBookmark
}

function deleteBookmark(req, res) {
    Bookmark.findOneAndDelete(req.body, function (err) {
      res.redirect('/bookmarks');
    });
}

function update(req, res) {
  //req.body.user = req.user._id;
  Bookmark.findOneAndUpdate(req.body,
    req.body,
    { new: true },
    function (err, bookmark) {
      if (err || !bookmark) return res.redirect('/bookmarks');
    }
  );
}

function edit(req, res) {
  //req.body.user = req.user._id;
  Bookmark.findOne(req.body, function(err, bookmark) {
    if (err || !bookmark) return res.redirect('/bookmarks');
    res.render(`bookmarks/show/${bookmark._id}`);
  });
}


function show(req, res) {
  Bookmark.findById(req.params.id, function (err, bookmark) {
    res.render('bookmarks/show', { title: 'Edit Bookamrk', bookmark });
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
  Bookmark.find({})
  .then(function (bookmarks) {
    res.render('bookmarks/index', {bookmarks});
  })
    // User.findById(req.user._id)
    // .then(function (user) {
    //   res.render('bookmarks/index', {user});
    // })
  //const bookmarks = await Bookmark.find().sort('-CategoryWeight');
}