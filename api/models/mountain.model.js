const State = require("../models/state.model");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mountainSchema = new Schema({
    id: {type: String, required: true},
    name: { type: String, required: true },
    numLifts: { type: Number, required: true },
    trails: { type: Array, required: true },
    locationTown: { type: String, required: true },
    locationState: { type: State, required: true },
    rating: { type: Number, required: true },
    websiteURL: {type: String, required: false}
}, {
    timestamps: true,
});

const Mountain = mongoose.model('Mountain', mountainSchema);
module.exports = Mountain;