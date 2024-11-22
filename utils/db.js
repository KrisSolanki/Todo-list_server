import mongoose from "mongoose";

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"TODO_SERVER"
        })
        console.log("Database connected successfully")
    }catch(error){
        console.error("Error connecting to MongoDb: ",error)
        process.exit(1);
    }

}

export default dbConnection;