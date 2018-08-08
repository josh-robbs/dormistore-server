const express = require('express')
const router = express.Router()

const queries = require('../database/queries')


router.get('/', (req,res,next) => {
  queries.list('orders')
  .then(order => {
    res.json({order})
  })
})

module.exports = router