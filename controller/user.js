const user = require("../services/user")

let add = async (req, res) => {
    let addData = await user.add(req.body).catch((err) => { return err })
    return res.status(200).send(addData)
}

let get = async (req, res) => {
    let getData = await user.get().catch((err) => { return err })
    return res.status(200).send(getData)
}

let addbyapi = async (req, res) => {
    // let addData = await user.addByAxios().catch((err) => { return err })
    // log("!234567")
    // console.log(addData);
    // return .status(200).send

    let data = await user.addByAxios()
    console.log(data)
    return res.send(data)
}

module.exports = { add, get, addbyapi }