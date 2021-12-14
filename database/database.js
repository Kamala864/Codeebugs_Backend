//importing mongo db as mongoose
const mongoose = require("mongoose");

//Establishing databaseconnection

mongoose.connect("mongodb://127.0.0.1:27017/Codeebugs",{
    useNewUrlParser : true,
    useCreatedIndex : true,
    useUnifiedTopology : true,
})