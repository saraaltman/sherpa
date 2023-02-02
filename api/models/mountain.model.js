const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mountainSchema = new Schema({
    name: { type: String, required: true },
    lifts: { type: Number, required: true },
    trails: { type: Number, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true },
}, {
    timestamps: true,
});

const Mountain = mongoose.model('Mountain', mountainSchema);
module.exports = Mountain;