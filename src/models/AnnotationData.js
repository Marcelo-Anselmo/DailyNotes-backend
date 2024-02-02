const mongoose = require('mongoose');

const AnottationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean, 
});

module.exports = mongoose.model('Anottations', AnottationDataSchema);