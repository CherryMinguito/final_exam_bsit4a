const { MongoClient } = require("mongodb")

const conUrl = 'mongodb+srv://johnmicheael30:<password>@cluster0.4mhl8f1.mongodb.net/test';

const client = new MongoClient(conUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((err) => {
    if(err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log("Successfully connected to MongoDB");
});

module.exports = client;