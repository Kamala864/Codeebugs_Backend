
const express = require("express");
const router = new express.Router();

const course = require("../models/course")
const video_upload = require("../middlewares/videoupload");
const image_upload = require("../middlewares/imageupload");
const upload = require("../middlewares/videoupload");


//view all course
router.get("/course/showall", function(req,res){
          course.find()
          .then(function (data) {
               res.status(201).json({ success: true, data: data })
          })
          .catch(function (e) {
               res.status(500).json({ message: e })
       })
})

//add course


router.post('/addcourse',video_upload.single('video'), function (req, res) {
         console.log(res) 

         
     const courseTitle = req.body.courseTitle;
     const courseDescription = req.body.courseDescription;
     const tutorName = req.body.tutorName;
     const chapterName = req.body.chapterName;
     const video = req.file.filename;
     const quiz = req.body.quiz;



     var course_data = new course({
             courseTitle: courseTitle,
             courseDescription: courseDescription,
             tutorName: tutorName,
             tutorial :{chapterName : chapterName, video : video} ,
             quiz : quiz,
     })

     course_data.save()
     
             .then(function () {
                     res.status(201).json({ data: course_data,success: true, message: "Course has been added!" })
             })
             .catch(function (e) {
                     res.status(500).json({ message: e })
             })
})

// to display single course
router.get("/course/:id", function (req, res) {
     const id = req.params.id;
//      console.log(id)
     course.findById({_id:id})
        .then(function (data) {
        console.log(data)
        res.status(201).json(data)
    })
        .catch(function (e) {
        res.status(500).json({ message: e })
        });
})

router.get("/searchcourse/:course_title", function (req, res) {
        const title = req.params.course_title;
        console.log(req.body.course_title)
        course.find({title : title})
                .then(function (result) {
                        res.status(201).json({success: true, data : result})
                })
                .catch(function (e) {
                        res.status(500).json({ message: e })
        });
})

// update course
router.put("/updatecourse/:id", function (req, res) {
     const id = req.params.id;
     const update = {
             "$set": {
                     "title": req.body.title,
                     "description": req.body.description,
                     "lecturer" : req.body.lecturer
             }
     };
     const option = {
             returnNewDocument: false
     }
     course.findOneAndUpdate({ "_id": id }, update, option)
             .then(function (result) {
                     res.status(201).json({ success: true, message: "Course has been updated!" })
             })
             .catch(function (e) {
                     res.status(500).json({ message: e })
             });
})

//delete course
router.delete('/deletecourse/:id', function (req, res) {
     const id = req.params.id;

     course.deleteOne({ _id: id })
             .then(function (result) {
                     res.status(201).json({ success: true, message: "Course has been deleted!" })
             })
             .catch(function (e) {
                     res.status(500).json({ message: e })
             });

})
  
module.exports = router