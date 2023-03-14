const user = require("../controller/user")
const express = require("express")
const rout = express.Router()


rout.post("/", user.add)
rout.get("/", user.get)
rout.get("/axios", user.addbyapi)


module.exports = rout