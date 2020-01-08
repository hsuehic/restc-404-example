import Koa, { Context, Next } from 'koa';
import { koa2 } from 'restc';
import Router from '@koa/router';

const app = new Koa();
app.keys = ['test', 'test1'];
app.use(koa2()); // common out this for comparation

const router = new Router();
router.get('/', async (ctx: Context, next: Next) => {
  ctx.body = {
    test: 'Hello world',
  };
});
router.get('/api/item', async (ctx: Context, next: Next) => {
  ctx.body = {
    hello: 'world',
  };
});
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080);
