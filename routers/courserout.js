
const express = require("express");
const router = new express.Router();

const course = require("../models/course")
const video_upload = require("../middlewares/videoupload");
const image_upload = require("../middlewares/imageupload");


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
        
     const title = req.body.title;
     const description = req.body.description;
     const lecturer = req.body.lecturer;
     const video = req.file.filename;
     console.log(title);

     var course_data = new course({
             title: title,
             description: description,
             lecturer: lecturer,
             video: video
     })
     course_data.save()
             .then(function () {
                     res.status(201).json({ success: true, message: "Course has been added!" })
             })
             .catch(function (e) {
                     res.status(500).json({ message: e })
             })
})

// to display single course
router.get("/course/:id", function (req, res) {
     const id = req.params.id;
     console.log(id)
     course.findById({_id:id})
        .then(function (data) {
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

// enroll course
router.put("/enrollcourse/:id", function (req, res) {
        const id = req.params.id;
        const enrolledBy =  req.body.enrolledBy
       
        course.findOneAndUpdate({ _id: id }, {$push:{enrolledBy: enrolledBy}}, {new: true})
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
     console.log(id)

     course.deleteOne({ _id: id })
             .then(function (result) {
                     res.status(201).json({ success: true, message: "Course has been deleted!" })
             })
             .catch(function (e) {
                     res.status(500).json({ message: e })
             });

})

module.exports = router