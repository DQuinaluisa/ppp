; 
'use stric'

const { Schema, model } = require('mongoose')

const FileSchema = new Schema ({

    filename:  String,
    path :     String,
    originalname: String

})


module.exports = model('files', FileSchema);