const express = require('express');
const router = express.Router()
const Model = require('../models/model')

// Post Method
router.post('/post', async (req, res) => {
    const user = new Model({
        name:req.body.name,
        gender:req.body.gender
    })

    try {
        const userToSave = await user.save();
        res.status(200).json(userToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Get All Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

// Get All Method
router.delete('/delete/:id', (req, res) => {
    res.send('delete by ID API')
})
module.exports = router;