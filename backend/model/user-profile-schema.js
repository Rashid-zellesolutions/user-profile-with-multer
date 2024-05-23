const mongoose = require('mongoose')

const userProfileSchema = new mongoose.Schema({
    username: {type: String, required: [true]},
    password: {type: String, required: [true]},
    profilePic: {type: String}
})

const ProfileInfo = mongoose.model("ProfileInfo", userProfileSchema);
module.exports = ProfileInfo;