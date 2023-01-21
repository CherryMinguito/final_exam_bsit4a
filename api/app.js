const Koa = require('koa');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');
const parser = require('koa-bodyparser');

const app = new Koa();

// Set up body parsing middleware
app.use(koaBody())
app.use(cors());

// Require the Router we defined in books.js
let ldata = require('./questions.js');

// Use the Router on the sub route /books
app.use(ldata.routes()).use(ldata.allowedMethods);

app.listen(3001, ()=>{
    console.log("http://localhost:3001/questions")
});
