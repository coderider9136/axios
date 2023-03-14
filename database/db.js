const knex = require("knex")

const knexConnection = knex({
    client: "mysql2",
    connection: {
        port: 3306,
        host: "localhost",
        database: "task",
        password: "Admin@123",
        user: "root"
    }
})

knexConnection.raw("select version()")
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err))


module.exports = { knexConnection }    