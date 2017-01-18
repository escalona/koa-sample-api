import 'babel-polyfill';
import koa from 'koa';
import routes from './routes';

const app = koa();

app.use(routes.routes());
app.use(routes.allowedMethods());

if (!module.parent) {
    app.listen(3001);
}

export default app;
