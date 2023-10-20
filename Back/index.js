console.log('Prueba wiii')

const express = require('express')
const conectarDB = require('./config/db.js')
const cors = require('cors')

const app = express()
conectarDB()
app.use(cors())
app.use( express.json())

app.use('/api', require('./routes/routes'))


app.listen(3000, () => {
    console.log("La aplicación se está ejecutando en http://localhost:3000")
})
