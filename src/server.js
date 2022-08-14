const express = require('express')
const app = express()
const candidatesRouter = require('./routes/candidate')

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hola a todos')
})

app.use('/candidates', candidatesRouter)

module.exports = app