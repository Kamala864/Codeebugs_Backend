const mongoose = require("mongoose")

const schema_quiz = new mongoose.Schema({
    question : String,
    correst_answer : String,
    incorrect_answers  : Array,
})