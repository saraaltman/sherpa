const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    _id: {type: String},
    user: { type: String, required: true },
    entity: { type: String, required: true },
    rating: { type: Number, required: true, enum:[1,2,3,4,5] },
    trailDifficulty: {type: Number, enum:[1,2,3]},
    note: { type: String, required: true },
    reviewType: { type: String, required: true, enum: ["mountain", "trail"] },
}, {
    timestamps: true,
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;