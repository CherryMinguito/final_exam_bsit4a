const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kumanderhudas:kHPNtnfwNWPZj32N@cluster0.8xjxxkm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if(err){
        console.error(err);
    } else {
        console.log('Connected to MongoDB Atlas...')
    }
});

module.exports = client;