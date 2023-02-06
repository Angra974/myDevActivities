const http = require('http')
const port = 3000
const host = '127.0.0.1'

const server = http.createServer((request, response) => {
        response.writeHead(200, {'Content-Type': 'text/plain'})
        console.log('Server is working')
        response.end('Server working success')
})

server.listen(port,host, (error) => {
    if(error) {
        console.log('error : ' + error)
    } else {
        console.log('Server is running on port : ' + port)
    }
})
