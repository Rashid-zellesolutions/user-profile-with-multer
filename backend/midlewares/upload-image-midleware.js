const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, callBAck){
        callBAck(null, './uploads')
    },
    filename: function(req, file, callBack){
        const uniqueDAte = Date.now();
        callBack(null, `${uniqueDAte}_${file.originalname}`)
    }
})

const uploads = multer({storage: storage})
module.exports = uploads;