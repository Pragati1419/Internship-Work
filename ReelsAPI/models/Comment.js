const mongoose = require('mongoose')
const CommentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    ,
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    comment: {
        type: String,
        maxlength: 200,
        required: true
    },
    replies: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CommentReply'
        }],
    },
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

module.exports = mongoose.model('Comment', CommentSchema);