const Bookmark = require('../models/bookmark');

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
  Bookmark.updateOne(req.params.id, req.body);
  res.render('bookmarks/show', {title: 'Edit Bookamrk', bookmark});
  res.redirect('/bookmarks');
}

function edit(req, res) {
  const bookmark = Bookmark.findOne(req.params.id);
  res.render('bookmarks/show', {title: 'Edit Bookamrk', bookmark});
}


function show(req, res) {
    Bookmark.findById(req.params.id, function (err, bookmark) {
      // const bookmark = new Bookmark({ title: String }, { description: String }, { url: String }, { category: String, enum: ['News', 'Financial', 'School', 'Other'] } );
      // bookmark.save(function (err) {
        res.render(`bookmarks/show`, { title: 'Edit Bookamrk', bookmark});
    });
      // const bookmarkId = new Bookmark(req.body);
      // bookmark.save(function (err) {
      //   if (err) return res.redirect('/bookmarks/show');
      //   console.log(bookmark);
      //   res.redirect(`/bookmarks`);
      // });
    //});
  }

function create(req, res) {
    bookmarkId = req.params.id;
    req.body.bookmark = bookmarkId;
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
        res.render('bookmarks/index', { title: 'My Bookmarks', bookmarks });
      })
      .catch(function (err) {
        res.redirect('/bookmarks');
      })
      //const bookmarks = await Bookmark.find().sort('-CategoryWeight');
  }