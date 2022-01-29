const express = require("express");

//Exporting the route
const student_route = new express.Router();

//Import Student Table as Students
const Students = require("../models/student")

const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")

//Registration
student_route.post('/signup',function(req,res){
    const full_name = req.body.full_name;
    const email = req.body.email;
    const age = req.body.age;
    const password = req.body.password;

    bcrypt.hash(password,12,function(err, hash12){
        var student_data = new Students({full_name :  full_name,
        email : email,
        age : age,
        password : hash12,
        });
        console.log("from student register route")

        student_data.save().then(function(){
            res.status(201).json({message : "Congratulation! Registration has been successfull."})
        }). catch ( function (e){
            res.status().json({message : e})
        })
    }); 
})


//User Login

student_route.post('/user/login',function(req,res){
    console.log(req.body)
    const email=req.body.email;
    const password=req.body.password;

    Students.findOne({email:email})
    .then(function(data){
        if(data==null){
            return res.status(403).json({message:"Invalid craditaintail"})
             
        }

        bcrypt.compare(password,data.password, function(err,result){
            if (result===false){
                return res.status(403).json({message:"Invalide credentials"})

            }
            const token=jwt.sign({yourId:data._id},'anysecretkey');
            const userID= data._id
            const username = data.full_name
            const email = data.email
            res.status(200).json({token:token,username:username,email:email,userID:userID, message:"Auth successs!"})
        })
    })

    .catch()
})

//for fetching data
student_route.get("/user/showall", function(req,res){
    Students.find()
    .then(function (data) {
         res.status(201).json({ success: true, data: data })
    })
    .catch(function (e) {
         res.status(500).json({ message: e })
 })
})

//for updating students
student_route.put('/student/update', function(req,res){
    const id = req.body.id;
    const full_name = req.body.full_name;
    const email = req.body.email;
    const age = req.body.age;
    const password = req.body.password 

    Students.updateOne({_id:id}, {full_name : full_name}, {email : email}, {age : age}, {password : password})
    .then(function(result){

    }).catch()
})

//delete student
student_route.delete('/deleteuser/:id', function (req, res) {
    const id = req.params.id;
    console.log(id)

    Students.deleteOne({ _id: id })
            .then(function (result) {
                    res.status(201).json({ success: true, message: "Course has been deleted!" })
            })
            .catch(function (e) {
                    res.status(500).json({ message: e })
            });

})

module.exports = student_route