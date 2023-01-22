const express = require('express');
const router = express.Router()
const User = require('../models/user');
const Listing = require('../models/add-listing');


// Post Method
router.post('/addUser', async (req, res) => {
    const user = new User({
        UID:req.body.UID,
    })

    try {
        const userToSave = await user.save();
        res.status(200).json(userToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.put('/updateUser', async (req, res) => {
    let uid = req.body.uid
    let profile = req.body.profile
    console.log(uid)
    console.log(profile)
    try {
        User.collection.findOneAndUpdate(
            {UID: `${uid}`},
            {$addToSet:{profile}}
        )
        res.status(200).json("it worked")
    } catch (error) {
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
    console.log(req.body)
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

router.get('/getListings', async (req, res) => {

    try {
        const listing = await Listing.find({});
        res.status(200).send(listing);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;