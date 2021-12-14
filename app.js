//Importing express
const express = require('express');

//Importing database Connection
require("./database/database");

//Importing Student route as route_student
const route_student = require("./routers/studentrout")


//Importing bodyParser
const bodyParser=require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(route_student)




app.listen(5000)