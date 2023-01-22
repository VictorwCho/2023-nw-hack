const express = require('express');
const router = express.Router()
const User = require('../models/user');
const Listing = require('../models/add-listing')

// Post Method
router.post('/addUser', async (req, res) => {
    const user = new User({
        UID:req.body.UID,
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
    const listings = new Listing({
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
        const result = await listings.save()
        res.status(200).json(result)
    } catch (error) {
        console.error(error);
        res.status(400).json({message: error.message})
    }
})

module.exports = router;