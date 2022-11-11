const mongoose = require('mongoose');

const AdsSchema = mongoose.Schema({
    companyName: { type: String, required: true },
    primaryText: { type: String, required: true },
    headline: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    url: { type: String },
});

module.exports = mongoose.model('Ads', AdsSchema);
