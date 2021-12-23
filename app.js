//Importing express
const express = require('express');
const cors = require("cors");


//Importing database Connection
require("./database/database");

//Importing Student route as route_student
const route_student = require("./routers/studentrout")
const route_admin = require("./routers/adminrout")
const route_course = require("./routers/courserout")

//Importing bodyParser
const bodyParser=require("body-parser");

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(route_admin)
app.use(route_student)
app.use(route_course)



app.listen(5000);