const mongoose = require('mongoose');


const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide Name'],
        trim: true
    },
    city: {
        type: String,
        required: [true, 'Must Provide a city'],
        trim: true
    },
    donation: {
        type: String,
        required: [true, 'Provide a donation to make'],
        trim: true
    },
    dropofflocation: {
        type: String,
        required: [true, 'Provide a dropping point'],
        trim: true
    },
    phoneno: {
        type: Number,
        required: [true, 'Provide a Phone number'],
        trim: true
    },
    whatsapp: {
        type: Number,
        trim: true
    },
    instagram: {
        type: String,
        trim: true
    },
    facebook: {
        type: String,
        trim: true
    },
    website: {
        type: String,
        trim: true
    }

})// first schema

module.exports = mongoose.model('List', ListSchema)