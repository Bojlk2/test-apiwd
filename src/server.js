const express = require('express')
const cors = require('cors')
const app = express()
const candidatesRouter = require('./routes/candidate')

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hola a todos')
})

app.use('/candidates', candidatesRouter)

module.exports = app