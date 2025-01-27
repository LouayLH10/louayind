const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const schema = mongoose.Schema({
 
    email : {type : String , required : true , unique : true},
    password : String,

})

schema.pre('save' , async function(){
    let key = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, key)
}) 

module.exports = mongoose.model('Admin' , schema)