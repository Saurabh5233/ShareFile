const mongoose = require('mongoose');
const fileSchema= new mongoose.Schema(
    {
        originalName:{type:String, required:true}, 
        storedName:{type:String, required:true}, 
        size: {type:Number, required:true}, 
        downloadUrl:{type:String, required:true},
}, {timestamps:true});

module.exports = mongoose.model('File', fileSchema);