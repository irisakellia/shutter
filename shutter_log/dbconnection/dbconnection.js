const mongoose = require('mongoose');
const uri = "mongodb+srv://irisakellia:123@cluster0.jhv2iwc.mongodb.net/shutter?retryWrites=true&w=majority&appName=Cluster0" 

const dbConnection = ()=>{

    mongoose.connect(
        uri 
    )

    mongoose.connection.on("connected",()=>{
        console.log("successfully connected to mongodb")
    })

    mongoose.connection.on("error",(error)=>{
        console.error(error.message);
    })
    mongoose.connection.on("disconnected",()=>{
        console.log("disconnection from the database ");
    })
}

module.exports = {dbConnection};