import express, { Router } from "express"
import { healthcheck } from "../controllers/health.controllers.js"

const router = Router()

router.get('/healthcheck',healthcheck)

export default router