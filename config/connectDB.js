const mongoose = require("mongoose")
const env = require("dotenv")
env.config()

const mongoURL = process.env.mongo_URL
const connectToDB = async () => {
    try {
        const mongoConnected = await mongoose.connect(mongoURL)
        if (mongoConnected) {
            console.log("MongoDB is connected");
            
        }
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = connectToDB

