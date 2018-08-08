const express = require('express')
const router = express.Router()

const queries = require('../database/queries')


router.get('/', (req,res,next) => {
  queries.list('customers')
  .then(customer => {
    res.json({customer})
  })
  .catch(next)
})

router.get('/:id', (req,res,next) => {
  queries.read(req.params.id, 'customers')
  .then(customer => {
    customer
        ? res.json({customer})
        : res.status(404).json({message: 'Not found'})
  })
  .catch(next)
})

router.post('/create', (req,res,next) => {
  queries.post(req.body, 'customers')
  .then(customer => {
    res.status(201).json({message: 'Created'})
  })
  .catch(next)
})

router.delete('/:id', (req,res,next) => {
  queries.delete(request.params.id, 'customers')
  .then(() => {
    response.status(204).json({deleted: true});
  })
  .catch(next)
})

router.put('/:id', (req,res,next) => {
  queries.update(req.params.id, req.body, 'customers')
  .then(customer => {
    res.json({customer});
  })
  .catch(next);
})

module.exports = router