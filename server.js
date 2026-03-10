const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const connectDB = require("./server/config/db")

const categoryRoutes = require("./server/routes/categoryRoutes")
const proposalRoutes = require("./server/routes/proposalRoutes")

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/category", categoryRoutes)
app.use("/api/proposal", proposalRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT)
})
