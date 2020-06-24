const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})

module.exports = List = mongoose.model('list', ListSchema)