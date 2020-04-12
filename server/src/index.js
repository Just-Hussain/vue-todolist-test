// whole code is wrapped in an IIFE to use async/await
(async () => {

    // express is what handles all the HTTP work
    const express = require('express')
    // cors allows for sccess from remote hosts
    const cors = require('cors')

    // mysql promise wrapper
    const mysql = require('promise-mysql')

    // for orginization, all routes are in a seperate file
    const routes = require('./routes')
    // and all configs too
    const config = require('./config/config')

    var bodyParser = require('body-parser')

    // init express
    let app = express()

    // use cors
   app.options('*', cors())
   app.use(bodyParser.json())

    // config for mysql connection
    // create connection, connecting is done with the first query
    let conn = await mysql.createConnection(config.db)

    // test query
    let res = await conn.query('SELECT * FROM Todo')
    console.log(res);


    // pass express instance to <routes> for it to handle GET and POST and such
    // and the conncetion for mysql queries
    routes(app, conn)

    // start the server on port port
    app.listen(config.port)

    console.log('up and running');
})()
