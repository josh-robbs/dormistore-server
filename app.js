const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT || 8080)

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res,next) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(port, () => {console.log(`For tacos, go to port ${port}`)})