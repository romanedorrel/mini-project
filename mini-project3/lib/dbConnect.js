import mongoose from "mongoose";

export const mongoData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log ('Connected to MongoDB')
    } catch (erro){
        console.log("error connecting to MongoDB:", error);
    }
}