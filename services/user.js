const user = require("../model/user")
const axios = require("axios")


async function add(param) {
    let addData = await user.add(param).catch((err) => { return err })
    return { data: addData }
}

async function get() {
    let getData = await user.getData().catch((err) => { return err })
    return { data: getData }
}

async function addByAxios() {
    let apiData = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((err) => {
        console.log(err);
        // user.add(res.data)
    })
    let data = await user.add(apiData.data).catch((err) => { return err })

    return { data: data }

}

module.exports = { add, get, addByAxios }