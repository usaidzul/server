const mongoose = require('mongoose');

const CaseSchema = mongoose.Schema({
    Date: Date,
    State: String,
    NoOfCases: String
})
 
module.exports = mongoose.model('test', CaseSchema, 'test');