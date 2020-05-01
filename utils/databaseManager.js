const pg = require('postgres')
const { readFile } = require('fs-nextra')
const { dbUsername, dbPassword, dbName, dbHost, dbPort, dbCert } = require('../auth.json')

module.exports = async (client) => {
    // make our connection
    const sqlConnection = pg(`postgres://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`, {
        requestCert: false,
        ssl: { ca: await readFile(`${dbCert}`) },
    })

    client.sqlConnection = sqlConnection

    // testing
    console.log(client.sqlConnection)
}