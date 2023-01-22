const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: false,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    sport: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    gender: {
        required: true,
        type: String
    },
    skillLevel: {
        required: true,
        type: String
    },
    position: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('listings', listingSchema)