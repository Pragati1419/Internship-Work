const mongoose = require('mongoose');

const CommentReplySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    commentId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    to_reply_userId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true
    }
    reply: {
        type: String,
        maxlength: 200,
        required: true
    },
    // replies: {
    //     type: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Reply'
    //     }],
    // },
    reactions: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CommentLike'
        }],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('CommentReply', CommentReplySchema);