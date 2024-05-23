const ProfileInfo = require('../model/user-profile-schema');
const path = require('path')

exports.createUserProfile = async(req, res) => {
    const {username, password} = req.body;
    const image = req.file.path // for multer to save this image path

    const profileData = new ProfileInfo({
        username,
        password,
        image
    });
    await profileData.save();
    res.status(201).json({success: true, profileData});
}