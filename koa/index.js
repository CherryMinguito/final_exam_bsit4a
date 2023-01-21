const Koa = require('koa');
const cors = require('@koa/cors');
require('./db');

const bodyParser = require('koa-bodyparser');
const book = require('./routes/books.route');

const app = new Koa();

app.use(bodyParser());
app.use(cors());

app.use(book.routes()).use(book.allowedMethods());

app.listen(8080);

console.log('Running Koa JS on port 8080...');