const Sport = require("../models/sport.model");
const Level = require("../models/level.model");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {type: String, required: true},
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    sport: { type: Sport, required: true },
    skiLevel: { type: Level, required: true },
    snowboardLevel: { type: Level, required: true },
    reviews: { type: Array, required: true },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;