import koa from 'koa';
import routes from './routes';

const app = koa();

app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(3001);
