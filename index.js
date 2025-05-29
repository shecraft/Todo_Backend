const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
const todoRoute = require("./routes/todoRoute")
const connectToDB = require("./config/connectDB")
connectToDB()


const PORT = 3000

app.listen(PORT, ()=>{      
   console.log("listening on PORT");
    
})
   
app.use("/api/todolist" ,  todoRoute)   
