const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mountainSchema = new Schema({
    name: { type: String, required: true },
    numLifts: { type: Number, required: true },
    trails: { type: Array, required: true },
    locationTown: { type: String, required: true },
    locationState: { type: String, required: true, 
        enum: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"] },
    rating: { type: Number, required: true, enum: [1,2,3,4,5] },
    websiteURL: {type: String}
}, {
    timestamps: true,
});

const Mountain = mongoose.model('Mountain', mountainSchema);
module.exports = Mountain;