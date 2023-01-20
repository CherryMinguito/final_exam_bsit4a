const koa = require('koa');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');

const app = new koa();

app.use(koaBody());
app.use(cors());

//local
let user = require('./user.js');

app.use(user.routes()).use(user.allowedMethods);

app.listen(3001, function() {
    console.log("Server at http://localhost:3001/user")
});


//Cloud
let mongo = require(`./mongorouter.js`);
const mongoapp = new koa();

mongoapp.use(cors());
mongoapp.use(koaBody());
mongoapp.use(mongo.routes()).use(mongo.allowedMethods);

mongoapp.listen(3002, function () {
  console.log("http://localhost:3002/user");
  console.log("Connected to MongoDB Atlas.");
});
