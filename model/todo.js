const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    date:{
      type:Date,
      default: Date.now()
    }
})

const todoModel =  mongoose.model("todolist", todoSchema)
  module.exports = todoModel