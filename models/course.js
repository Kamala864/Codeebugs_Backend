
const mongoose = require("mongoose")

const schema_course = new mongoose.Schema({
     title : {type:String},
     description : {type:String},
     lecturer : {type: String},
     video: {type: String},
     image: {type: String},
     enrolledBy: [
          {
               userID: {type: String}
          }
     ]
})

const course = mongoose.model("Course", schema_course)

module.exports = course;
