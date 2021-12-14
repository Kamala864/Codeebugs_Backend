//Importing express
const express = require('express');

//Importing database Connection
require("./database/database");

//Importing bodyParser
const bodyParser=require("body-parser");

const app = express();

app.use(bodyParser.json());




app.listen(5000)