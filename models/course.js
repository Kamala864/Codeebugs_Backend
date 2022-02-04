
const mongoose = require("mongoose")

const schema_course = new mongoose.Schema({
     courseTitle : {type:String},
     courseDescription : {type:String},
     tutorName : {type: String},
     weight:{type: Array},
     progress : {type:String},
     tutorial : [
          {chapterName : String, video : Array} 
     ],
     quiz:[
          {

          question : String,
          correctAnswer : String,
          incorrectAnswer : [],
          
     }
     ]

})

const course = mongoose.model("Course", schema_course)

module.exports = course;
