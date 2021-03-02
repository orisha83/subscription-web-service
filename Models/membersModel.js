const mongoose = require('mongoose');

let MembersSchema = new mongoose.Schema({
    name : String,
    email : String,
    city : String
})

module.exports = mongoose.model('members', MembersSchema);