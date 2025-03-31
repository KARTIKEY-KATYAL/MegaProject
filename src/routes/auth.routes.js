import express, { Router } from "express"
import userregisterationvalidator from "../validators/index.js"
import validate from "../middleware/validator.middleware.js"
import register from "../controllers/auth.controllers.js"

const router = Router()

router.route("/register").post(userregisterationvalidator(),validate,register)

export default router