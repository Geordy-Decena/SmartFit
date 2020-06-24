const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Item = require('../../models/Item')

//get all items
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

//create an item
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        sets: req.body.sets,
        reps: req.body.reps
    })

    newItem.save().then(item => res.json(item));
})

//delete an item
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router