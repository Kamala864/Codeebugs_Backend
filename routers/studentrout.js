const express = require("express");

//Exporting the route
const student_route = new express.Router();

//Import Student Table as Students
const Students = require("../models/student")

const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")




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
            res.status(200).json({token:token, message:"Auth successs!"})
        })
    })

    .catch()
})

module.exports = student_route