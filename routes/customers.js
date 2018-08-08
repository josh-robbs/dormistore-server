const express = require('express')
const router = express.Router()

const queries = require('../database/queries')


router.get('/', (req,res,next) => {
  queries.list('customers')
  .then(customer => {
    res.json({customer})
  })
})

module.exports = router