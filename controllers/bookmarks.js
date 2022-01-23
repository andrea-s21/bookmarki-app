const Bookmark = require('../models/bookmark');

module.exports = {
    index
    // new: newBookmark,
    // create,
    // show
}

// function show(req, res) {
//     Bookmark.findById(req.params.id, function (err, bookmark) {
//       console.log(bookmark)
//       Resource.find({ bookmark: bookmark._id }, function (err, resources) {
//         console.log(resources);
//         res.render('index/show', { title: 'Bookmark Detail', bookmarks, resources });
//       }
//       );
//     });
//   }

// function create(req, res) {
//     bookmarkId = req.params.id;
//     req.body.bookmark = bookmarkId;
//     Bookmark.create(req.body, function (err, bookmark) {
//         res.redirect(`/index`);
//     });
// }

// function newBookmark(req, res) {
//     res.render('/new');
// }

function index(req, res) {
    Bookmark.find({})
        .then(function(bookmarks) {
            res.render('/index', {title: 'My bookmark shelf', bookmarks});
        })
        .catch(function(err) {
            res.redirect('/index');
        });
}