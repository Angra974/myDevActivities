const http = require('http');

const host = '127.0.0.1'
const PORT = 3000

const server = http.createServer((request, serverOptions) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('Hello World')
    response.end()
})

server.listen(PORT, host, (error) => {
    if(error) {
        console.log(`Error while loading server: ${error}`)
        process.exit(1)
    }

    console.log(`Server listening on port ${PORT}`)
})
