// import Koa = require('koa2');
import * as Koa from 'koa';
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
require('./helper/openai');

const app = new Koa();
const router = require('./router');

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(20012, () => {
  console.log('Server running on port 20012');
});
