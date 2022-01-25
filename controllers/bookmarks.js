const Bookmark = require('../models/bookmark');
const user = require('../models/user');
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
  Bookmark.findById(req.params.id).populate('bookmark').exec(function (err, bookmark) {
    Bookmark.findByIdAndDelete(req.params.id, function (err) {
        console.log(`deleting: ${bookmark}`);
        res.redirect('/bookmarks');
    });
});
}

function update(req, res) {
  Bookmark.findOneAndUpdate(req.params.id,
    req.body,
    { new: true },
    function (err, bookmark) {
      if (err || !bookmark) return res.redirect('/bookmarks');
    }
  );
}

function edit(req, res) {
  Bookmark.findOne(req.params.id, function(err, bookmark) {
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
  Bookmark.find({}).populate('user').exec(function(err, bookmarks){
    res.render('bookmarks/index', {bookmarks});
  })


  //   User.findById(req.user._id)
  //   .then(function (user) {
  //     res.render('bookmarks/index', {user});
  //   })
  //const bookmarks = await Bookmark.find().sort('-CategoryWeight');
}