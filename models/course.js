
const mongoose = require("mongoose")

const schema_course = new mongoose.Schema({
     courseTitle : {type:String},
     courseDescription : {type:String},
     tutorName : {type: String},
     tutorial : [
          {chapterName : String, 
          video : String} 
     ]

})

const course = mongoose.model("Course", schema_course)

module.exports = course;
