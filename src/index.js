import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path : './.env'
})

const PORT = process.env.PORT || 3000

connectDB()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`App is connected at PORT : ${PORT}`)
        })
    })
    .catch((err)=>{
        console.log('Error connecting to db',err)
        process.exit(1)
    })