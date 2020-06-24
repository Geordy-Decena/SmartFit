const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const List = require('../../models/List')

//get all items
router.get('/', (req, res) => {
    List.find()
        .sort({ date: -1 })
        .then(lists => res.json(lists))
})

//create an item
router.post('/', auth, (req, res) => {
    const newList = new List({
        name: req.body.name,
        sets: req.body.sets,
        reps: req.body.reps,
        id: req.body.id
    })

    newList.save().then(list => res.json(list));
})

//delete an item
router.delete('/:id', auth, (req, res) => {
    List.findById(req.params.id)
        .then(list => list.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router