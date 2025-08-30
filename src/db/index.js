import mongoose from "mongoose";

const  connectDb = async () => {
    try {
      const instance = await mongoose.connect(`${process.env.MONGODB_URI}`)
      console.log(`database is connected ${instance.connection.host}`);
      
    } catch (error) {
        console.log(`Error occured in connection ${error}`);
        process.exit(1);
    }
}
    
export default connectDb;