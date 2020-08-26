const mongoose = require('mongoose');

const { Schema } = mongoose;

const choreSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Chore', choreSchema);