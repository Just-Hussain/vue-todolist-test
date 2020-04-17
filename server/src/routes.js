// for usage in main app file <index.js>
// to handle routes, first specify GET or POST
// params:
//  the routes
//  call back the has REQuest and RESponse
//  -> req holds the data in req.body
//  -> to send to the port use res.send
module.exports = (app, conn) => {
    app.get('/todo', (req, res) => {
        
        (async (res) => {
            let arr = await conn.query('SELECT * FROM Todo')
            console.log(arr[0]);

            res.send(arr)
        })(res)
        
        
        //res.send('Hola boi')
        console.log(`hola sent + req: ${req.body} + res ${res.body}`);
    })

    app.post('/todo', (req, res) => {
        console.log('??');
        (async (req, res) => {
            console.log(req.body);

            conn.query('INSERT INTO Todo SET ?', req.body)
            .then(suc => {
                console.log(suc);
                res.status(200).send('all well')
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('not well')
            })
        })(req, res)
    })
}