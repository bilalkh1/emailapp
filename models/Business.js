const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: false
    },
    holderName: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model("Business", businessSchema);