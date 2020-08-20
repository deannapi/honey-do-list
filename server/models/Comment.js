const mongoose = require('mongoose');
const Populate = require('../utils/autopopulate');
const { Schema } = mongoose;

const commentSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true},
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]
});

// populate the author field
commentSchema
    .pre('findOne', Populate('author'))
    .pre('find', Populate('author'))
    .pre('findOne', Populate('comments'))
    .pre('find', Populate('comments'))

module.exports = mongoose.model("Comment", commentSchema);