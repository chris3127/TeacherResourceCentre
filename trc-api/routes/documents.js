const router = require('express').Router()
let Document = require('../models/document.models')

router.route('/').get((req,res) => {
    Document.find()
        .then(documents => res.json(documents))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const title = req.body.title
    const link = req.body.link
    const newDocument = new Document({
        title,
        link
    })
    newDocument.save()
        .then(() => res.json('Document added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req,res) => {
    Document.findById(req.params.id)
        .then(document => res.json(document))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) => {
    Document.findById(req.params.id)
        .then(document => {
            document.title = req.body.title
            document.link = req.body.link
            
            document.save()
                .then(() => res.json('Document updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
})


module.exports = router
