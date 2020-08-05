const express = require('express');
const Defaulting = require('../models/defaulting.model');
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.body)
  Defaulting.find({}, (err, defaultings) =>{
    res.json(defaultings)
  })
})

router.post('/', (req, res) =>{
  defaulting = new Defaulting({
    name: req.body.name,
    email: req.body.email,
    price: req.body.price
  })
  
  defaulting.save(() => {
    res.json(defaulting)
  })
})


router.put('/:id', async (req, res) => {
  let defaulting = await Defaulting.findById(req.params.id)
  defaulting.name = req.body.name
  defaulting.email = req.body.email
  defaulting.price = req.body.price

  defaulting.save(() => {
    res.json(defaulting)
  })

})

router.delete('/:id', (req, res) => {
  Defaulting.findByIdAndDelete(req.params.id, (err)=> {
    res.json({'message':'deleted'})
  })
})

module.exports = router;