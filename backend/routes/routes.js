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

//Create new sub listing
router.post("/add", async (req,res) => {
    const listings = new Model({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        date: req.body.date,
        sport: req.body.sport,
        location: req.body.location,
        gender: req.body.gender,
        skillLevel: req.body.skillLevel,
        position: req.body.position
    })
   
    try {
        const listing = req.body;
        const result = await collections.listings.insertOne(listing)

        if (result.acknowledged) {
            res.status(201).send("Created new listing")
        } else {
            res.status(500).send("Failed to create new listing")
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message)
    }
})

module.exports = router;