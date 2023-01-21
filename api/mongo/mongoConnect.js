const { MongoClient } = require("mongodb");

//Connect to MongoDB Deployment
const connectionUrl = `mongodb+srv://test:test@cluster0.bcoil6r.mongodb.net/test`;

const client = new MongoClient(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Check if connected to MongoDB
client.connect((err) => {
  if(err)
  {
    console.error(err);
    process.exit(-1);
  }
  console.log("Successfully Connected To MongoDB");
});

module.exports = client;
