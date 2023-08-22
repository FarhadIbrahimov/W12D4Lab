const express = require('express')

const router = express.Router()

const flightsController = require('../controllers/flightsController')


// induces

// "index" route GET
router.get('/', flightsController.index)

// "new" route GET
router.get('/new', flightsController.new)

// "update" route PUT
router.put('/:id', flightsController.update)

// "create" route POST
router.post('/', flightsController.create)

// "Show" route GET
router.get('/:id', flightsController.show)
 
module.exports = router