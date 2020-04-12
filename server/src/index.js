// whole code is wrapped in an IIFE to use async/await
(async () => {

// express is what handles all the HTTP work
const express = require('express')

// mysql promise wrapper
const mysql = require('promise-mysql')

// for orginization, all routes are in a seperate file
const routes = require('./routes')

// init express
let app = express()

// config for mysql connection
let config = {
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'Todos'
}
// create connection, connecting is done with the first query
let conn = await mysql.createConnection(config)

// test query
let res = await conn.query('SELECT * FROM Todo')
console.log(res);


// pass express instance to <routes> for it to handle GET and POST and such
routes(app, conn)

// start the server on port 8082
app.listen(8082)

console.log('up and running');
})()
