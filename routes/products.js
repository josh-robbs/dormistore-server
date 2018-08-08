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

router.post('/create', (req,res,next) => {
  queries.post(req.body, 'products')
  .then(product => {
    res.status(201).json({message: 'Created'})
  })
  .catch(next)
})

router.delete('/:id', (req,res,next) => {
  queries.delete(req.params.id, 'products')
  .then(() => {
    res.status(204).json({deleted: true});
  })
  .catch(next)
})

router.put('/:id', (req,res,next) => {
  queries.update(req.params.id, req.body, 'products')
  .then(product => {
    res.json({product});
  })
  .catch(next);
})



module.exports = router