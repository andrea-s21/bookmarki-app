const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    title: {
        type: String,
        required: true
      },
    description: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['News', 'Financial', 'School', 'Other']
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);