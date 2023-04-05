const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    _id: {type: String},
    name: { type: String, required: true },
    mountain: { type: String, required: true },
    trailLevel: { type: String, required: true, enum: ["green", "blue", "black", "double black"] },
    rating: { type: Number, required: true, enum: [1,2,3,4,5] },
    difficulty: {type: Number, required: true, enum: [1,2,3]},
    mountainMapURL: {type: String}
}, {
    timestamps: true,
});

const Trail = mongoose.model('Trail', trailSchema);
module.exports = Trail;