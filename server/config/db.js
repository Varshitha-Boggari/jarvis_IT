const mongoose=require("mongoose")

async function connectDB(){
    await mongoose.connect(process.env.MONGOURL)
    console.log("MongoDB connected successfully")
}

module.exports=connectDB