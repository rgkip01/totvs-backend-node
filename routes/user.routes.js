const express = require('express');
const Defaulting = require('../models/defaulting.model');
const router = express.Router()

router.get('/', (req, res) => {
  Defaulting.find(
    {
      name: {
        $regex: req.query.search || '',
        $options: 'i'
      }
    }, (err, defaultings) =>{
    
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

router.get('/order', async (req, res, next) => {
  Defaulting.find({}).sort(req.query.order).exec((err, filter)=> {
    if(err) {
      next(err);
    } else {
      res.json(filter)
    }
  })
})


module.exports = router;