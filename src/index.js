import app from "./app.js";
import dotenv from "dotenv"
import connectdb from "./db/index.js";

dotenv.config({
    path: './.env'
})
const PORT = process.env.PORT || 8000

// In production process.env runs only
// If port is not mentoined then app will definatly crash in production

connectdb()
    .then(()=>{
        app.listen(PORT , ()=>{console.log('DB Connected at ',PORT)})
    })
    .catch((err)=>{
        console.log(`MongoDB Connection Error ${err}`)
        process.exit(1)
    })


