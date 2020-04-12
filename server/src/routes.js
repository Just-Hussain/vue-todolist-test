// for usage in main app file <index.js>
// to handle routes, first specify GET or POST
// params:
//  the routes
//  call back the has REQuest and RESponse
//  -> req holds the data in req.body
//  -> to send to the port use res.send
module.exports = (app, conn) => {
    app.get('/test', (req, res) => {
        
        (async () => {
            let arr = await conn.query('SELECT * FROM Todo')
            console.log(arr[0]);
        })()
        
        
        res.send('Hola boi')
        console.log(`hola sent + req: ${req.body} + res ${res.body}`);
        
    })
}