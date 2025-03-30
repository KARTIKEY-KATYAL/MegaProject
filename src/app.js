import express from "express"

const app = express

import healthcheckRoutes from "./routes/healthcheck.routes.js"

app.use("/api/v1/users",healthcheckRoutes)

export default app