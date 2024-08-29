import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () =>{
    try {
        const connectionInstance = await connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log(`\nMongoDB is connected to DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Mongoose Connection Error", error);
    }
}

export default connectDB;