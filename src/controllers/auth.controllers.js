import { asyncHandler } from "../utils/async-handler.js";

const registeruser = asyncHandler(async (req,res) => {
    const {email,password,role} = req.body

    // Validation
    // if (!email || !password){

    // }

    // if (password.length < 8){

    // }

    registerationvalidation(body)
})

export {registeruser}