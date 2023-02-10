const TrailLevel = require("../models/trailLevel.model");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    id: {type: String, required: true},
    name: { type: String, required: true },
    mountain: { type: Number, required: true },
    trailLevel: { type: TrailLevel, required: true },
    rating: { type: Number, required: true },
    mountainMapURL: {type: String, required: false}
}, {
    timestamps: true,
});

const Mountain = mongoose.model('Mountain', mountainSchema);
module.exports = Mountain;