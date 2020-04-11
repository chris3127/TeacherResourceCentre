const mongoose = require('mongoose')

const Schema = mongoose.Schema

const documentSchema = new Schema({
    documentId: { type: Number, required: true },
    Title: { type: String, required: true },
    Link: { type: String, required: true }
},
    {
        timestamps: true,
    })

const Document = mongoose.model('Document', documentSchema)

module.exports = Document