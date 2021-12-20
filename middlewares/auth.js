const jwt=require('jsonwebtoken');
const User=require('../models/student');


//guard
module.exports.verifyUser=function(req,res,next){
    try{
        const token= req.headers.authorization.split("")[1];
        const data=jwt.verify(token,'anysecretkey');

        User.findOne({_id:data.yourId})
        .then(function(result){
            req.userData=result;
            next()
        })
        .catch(function(e){
            res.status(401).json({error:e})
        })
    }
    catch(e){
        res.status(401).json({error:e})

    }
}

module.exports.verifyAdmin=function(req,res,next){
    if (!req.userData){
        return res.status(401).json({message:"unauthorized"})

    }
    else if(req.userData.user_catagory=='admin'){
         return res.status(401).json({message:"Unauthorized"})
    }
    next();
}