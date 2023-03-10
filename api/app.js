const koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const api = require('./MongoRouter');


const app = new koa();

// app.use(cors());

app.use(cors());
app.use(bodyParser());

app.use(api.routes()).use(api.allowedMethods());

app.listen(3001, () => {console.log('http://localhost:3001/question')});
