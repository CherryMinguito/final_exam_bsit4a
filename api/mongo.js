const { MongoClient } = require('mongodb')

let uri = 'mongodb+srv://renzen900:resorfat100@cluster0.l8wsbwj.mongodb.net/questionaire?retryWrites=true&w=majority'

let dbconnect

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbconnect = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbconnect 
}