// import json server
const jsonServer = require('json-server');

// 2. Create a server
const server = jsonServer.create()

// 3. Setup path for db.json file
const router = jsonServer.router('db.json')

// 4. return middleware used by json server
const middleware = jsonServer.defaults()

// 5. Setup port for server
const port = process.env.port || 5000

// 6. Use middleware and router
server.use(middleware)
server.use(router)

// 7. To run the server
server.listen(port,()=>{
    console.log('Listening on the port '+port);
})
