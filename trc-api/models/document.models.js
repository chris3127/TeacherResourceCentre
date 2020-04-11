const mongoose = require('mongoose')

const Schema = mongoose.Schema

const documentSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true }
},
    {
        timestamps: true,
    })

const Document = mongoose.model('Document', documentSchema)

module.exports = Document