const mongoose = require('mongoose');

const CommentLikeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    reaction: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('CommentLike', CommentLikeSchema);