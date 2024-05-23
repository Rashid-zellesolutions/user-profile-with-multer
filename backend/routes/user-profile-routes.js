const express = require('express')
const router = express.Router()
const {createUserProfile} = require('../controller/create-user-profile');
const uploads = require('../midlewares/upload-image-midleware');

router.post('/create-new-user', uploads.single('image'), createUserProfile);

module.exports = router;