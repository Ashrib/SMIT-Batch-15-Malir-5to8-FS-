import mongoose from 'mongoose'

const dbConnect = async () => {
    try {
        if(mongoose.connection.readyState >= 1) return;

        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default dbConnect;