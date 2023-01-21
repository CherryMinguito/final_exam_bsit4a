const express = require('express')
const cors = require('cors')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./mongo')
const { Router } = require('express')


// init app and midware
const app = express()
app.use(cors())
app.use(express.json())


let db

connectToDb((err) => {
    if(!err){
        app.listen(3001, () => {
            console.log('app listening to port 3001')
        })
        db = getDb()
    }
})

//routes
app.get('/questions', (req, res) => {
    let stud = []
    db.collection('questions')
    .find()
    .sort({ name: 1 })
    .forEach(student => stud.push(student))
    .then (() => {
        res.status(200).json(stud)
    })
    .catch((err) => {
        res.status(500).json({error: 'buang'})
        
    })
})


app.post('/questions', (req, res) => {
    const stud = req.body
    console.log(req.body)

    db.collection('questions')
    .insertOne(stud)
    .then ( result => { 
        console.log(result)
    })
    .catch((error) => {
        console.log(error) 
    })

})

app.patch('/questions/:id', (req, res) => {

    const update = req.body
    console.log(req.body)
    db.collection('questions')
    .updateOne({_id: ObjectId(req.params.id)}, {$set: update})
    .then ( result => { 
        console.log(result)
    })
    .catch((error) => {
        console.log(error) 
    })
})


app.delete('/questions/:id', (req, res) => {
        
    console.log(req.body) 
    db.collection('questions')
    .deleteOne({_id: ObjectId(req.params.id)})
    .then ( result => { 
        console.log(result)
    })
    .catch((error) => {
        console.log(error) 
    })
})


