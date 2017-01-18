import koaRouter from 'koa-router';
import VideoController from './controllers/videos-controller';

const router = koaRouter({
    prefix: '/api/v1',
});

router.get('/video/info/:videoId', VideoController.getVideoInfo);

export default router;
