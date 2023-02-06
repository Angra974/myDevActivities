const http = require('http')
const fs = require('fs')
const host = '127.0.0.1'
const PORT = 3000
const path = require('path')

http.createServer((request, response) => {
        // we are serving html file
        console.log('In server')
        response.writeHead(200, { 'Content-Type': 'text/html' })

        // read the html file
        const data = fs.readFileSync(path.join(__dirname, 'alpha.html'))
        if(data) {
            console.dir(data)
            response.end(data)
        } else {
            console.log('Failed to read the file')
        }


}).listen(PORT, host, (err) => {
    if(err) throw err

    console.log('listening on port ' + PORT)
})
