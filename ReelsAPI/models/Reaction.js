const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    postId: {
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

module.exports = mongoose.model('Reaction', ReactionSchema);