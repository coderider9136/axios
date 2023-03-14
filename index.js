const express = require("express")
const app = express()
const rout = require("./router/user")

app.use(express.json())
app.use("/api", rout)
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => console.log("port is running"))

