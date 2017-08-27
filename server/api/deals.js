const router = require('express').Router()
const {Deal} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Deal.findAll()
    .then(deals => res.json(deals))
    .catch(next)
})
