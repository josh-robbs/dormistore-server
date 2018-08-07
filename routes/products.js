const express = require('express')
const router = express.Router()

const queries = require('../database/queries')


router.get('/', (req,res,next) => {
  queries.list()
  .then(product => {
    res.json({product})
  })
})

module.exports = router