const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {type: String},
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    sport: { type: String, enum: ["snowboard", "ski", "both"] },
    skiLevel: { type: String, enum: ["beginner", "intermediate", "expert", "na"] },
    snowboardLevel: { type: String, enum: ["beginner", "intermediate", "expert", "na"] },
    reviews: { type: Array},
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;