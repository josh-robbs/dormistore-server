const express = require('express')
const router = express.Router()

const queries = require('../database/queries')


router.get('/', (req,res,next) => {
  queries.list('products')
  .then(product => {
    res.json({product})
  })
  .catch(next)
})

router.get('/:id', (req,res,next) => {
  queries.read(req.params.id, 'products')
  .then(product => {
    product
        ? res.json({product})
        : res.status(404).json({message: 'Not found'})
  })
  .catch(next)
})

router.post()



module.exports = router