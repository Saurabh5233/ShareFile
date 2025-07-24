const multer = require('multer');
const {v4:uuidv4} = require('uuid');
const path = require('path');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb)=>{
    cb(null, true);
};

const upload = multer({
    storage, fileFilter, 
    limits:{fileSize:100*1024*1024}, // max 100MB
});

module.exports = upload;