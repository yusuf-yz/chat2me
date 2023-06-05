import * as Router from 'koa-router';

const { onHome, onChat2Text, onChat2Image } = require('../helper');

const router = new Router();

router.get('/', onHome).post('/chat-text', onChat2Text).post('/chat-image', onChat2Image);

module.exports = router;
