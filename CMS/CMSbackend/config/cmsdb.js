const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const connectdb = asyncHandler(async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected:", connect.connection.name);
    } catch(err){
        console.log(err);
        process.exit(1);
    }
})

module.exports = connectdb;