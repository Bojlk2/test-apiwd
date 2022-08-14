const server = require('./src/server')

server.listen(8080, () => {
    console.log('Server ready on http://localhost:8080')
})