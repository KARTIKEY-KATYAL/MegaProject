import mongoose from "mongoose";

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongo Connected")
    } catch (error) {
        console.error("Mongo connection Failed")
        process.exit(1)
    }
}

export default connectdb