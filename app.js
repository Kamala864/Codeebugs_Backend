//Importing express
const express = require('express');
const cors = require('cors');


//Importing database Connection
require("./database/database");

//Importing Student route as route_student
const route_student = require("./routers/studentrout")
const route_course = require("./routers/courserout")
const route_admin = require("./routers/adminrout")
const route_CodeEditor = require("./routers/codeeditorroute")


const app = express();
app.use(cors());
const path = require('path');
const publicDir = path.join(__dirname,"uploads");
const imageDir = path.join(__dirname,"uploads/images");

//Importing bodyParser
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(publicDir));
app.use(express.static(imageDir));

app.use(cors())

app.use(bodyParser.json());
app.use(route_admin)
app.use(route_student)
app.use(route_course)
app.use(route_CodeEditor)

app.listen(5000);