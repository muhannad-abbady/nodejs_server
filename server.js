const http = require('http')
const ex = require('express')

const server = http.createServer((req, res) => {
    if (req.url == "/" || req.url == '/home')
        res.write('welcome from Home')
    res.end();
})

server.listen(3333, () => console.log(`sever running on port: ${server.address().port}`))