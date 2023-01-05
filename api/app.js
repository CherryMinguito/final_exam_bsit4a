const koa = require('koa');
const Router = require('koa-router');
const app = new koa();
const {koaBody} = require('koa-body');
const cors = require ('@koa/cors');

app.use(koaBody());
app.use(cors());

let students = require('./student.js');

app.use(students.routes()).use(students.allowedMethods);

app.listen(3002, function() {
  console.log("Server at http://localhost:3002/student")
});
