console.log('Prueba wiii')

const express = require('express')
const app = express()
const cors = require('cors')


const conectarDB = require('./config/db.js')
conectarDB()
app.use(cors())

app.use( express.json())

app.use('/api', require('./routes/routes.js'))


app.listen(3000, () => {
    console.log("La aplicación se está ejecutando en http://localhost:3000")
})
