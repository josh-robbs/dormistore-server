const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT || 8080)

const products = require('./routes/products')
const customers = require('./routes/customers')
const orders = require('./routes/orders')

app.use(cors())
app.use(bodyParser.json())

app.use('/products', products)
app.use('/customers', customers)
app.use('/orders', orders)


app.listen(port, () => {console.log(`For tacos, go to port ${port}`)})