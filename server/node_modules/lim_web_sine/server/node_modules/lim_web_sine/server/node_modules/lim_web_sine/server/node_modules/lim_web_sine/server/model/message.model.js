const mongoose=require('mongoose')
const schema = mongoose.Schema({
    nom:{type : String , required : true },
    prenom:{type : String , required : true },
    object:{type : String , required : true },
    email : {type : String , required : true },
    message:{type : String , required : true },
    temps:String,
    jour:String
})
module.exports = mongoose.model('message' , schema)