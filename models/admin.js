const mongoose =  require("mongoose");

const schema_admin = new mongoose.Schema({
    Username : {type: String},
    email : {type : String},
    password : {type :String}
})

const admin = mongoose.model('Admin', schema_admin)

module.exports = admin