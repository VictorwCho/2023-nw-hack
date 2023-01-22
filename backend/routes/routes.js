const express = require('express');
const router = express.Router()
const Model = require('../models/model')

// Post Method
router.post('/post', async (req, res) => {
    console.log('hello')
    const user = new Model({
        name:req.body.name,
        gender:req.body.gender
    })

    try {
        console.log('hello')
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
router.post("/addListing", async (req,res) => {
    console.log("ADDING BACKEND")
    res.send("TEST")
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

        res.status(201).send("Created new listing")
        console.log("hello")
        // if (result.acknowledged) {
        //     res.status(201).send("Created new listing")
        //     console.log("hello")
        // } else {
            //res.status(500).send("Failed to create new listing")
        //}
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message)
    }
})

module.exports = router;