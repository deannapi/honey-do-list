const mongoose = require('mongoose');
const Populate = require('../utils/autopopulate');
const { Schema } = mongoose;
const moment = require('moment');

const commentSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true},
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}],
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    }
});

// populate the author field
commentSchema
    .pre('findOne', Populate('author'))
    .pre('find', Populate('author'))
    .pre('findOne', Populate('comments'))
    .pre('find', Populate('comments'))

module.exports = mongoose.model("Comment", commentSchema);