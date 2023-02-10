const ReviewType = require("../models/reviewType.model");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    id: {type: String, required: true},
    user: { type: String, required: true },
    entity: { type: String, required: true },
    rating: { type: Number, required: true },
    note: { type: String, required: true },
    reviewType: { type: ReviewType, required: true },
}, {
    timestamps: true,
});

const Mountain = mongoose.model('Mountain', mountainSchema);
module.exports = Mountain;