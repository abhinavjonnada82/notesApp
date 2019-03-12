const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notes = new Schema({
    description: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    priority: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = Note = mongoose.model('Notes', Notes)