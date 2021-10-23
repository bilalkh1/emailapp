const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryService = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("Category", categoryService);