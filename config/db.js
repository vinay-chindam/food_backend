import mongoose from "mongoose";

//export const  connectDB = async () =>{
    //await mongoose.connect('{mongodb+srv://vinaychindam1728:st0EhLHqxbrkkSFO@cluster0.kzljt05.mongodb.net/food-del').then(()=>console.log("DB Connected"))
//}

//require("dotenv").config()
//const mongoose=require('mongoose')

 export async function dbconnect(){
    try{

        const MONGODB_URL="mongodb+srv://vinaychindam1728:st0EhLHqxbrkkSFO@cluster0.kzljt05.mongodb.net/food-del"
        await mongoose.connect(MONGODB_URL)
        .then(console.log("db connected successfully"))

    }
    catch(error){
        console.log("db connection error")
        console.log(error)
        
        process.exit(1)


    }
}

//module.exports= dbconnect


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.