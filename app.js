const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT || 8080)

const products = require('./routes/products')

app.use(cors())
app.use(bodyParser.json())

app.use('/products', products)

app.listen(port, () => {console.log(`For tacos, go to port ${port}`)})