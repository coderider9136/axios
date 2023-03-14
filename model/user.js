const { knexConnection } = require("../database/db")

async function add(param) {
    let addData = await knexConnection("user").insert(param).catch((err) => { return err })
    return addData
}

async function getData(param = {}) {
    let getData = await knexConnection("user").where("id", param).catch((err) => { return err })
    return getData
}

module.exports = { add, getData }
