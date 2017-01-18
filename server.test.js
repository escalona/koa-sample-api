import server from './server';
import request from 'supertest';
import test from 'ava';
import Promise from 'bluebird';

test('app.get("/api/v1/video/info/:videoId")', (t) => {
    const videoId = '3f7l-Z4NF70';
    const expectedReturn = {
        "author": "Canon Europe",
        "keywords": ["Canon", "EOS", "550D", "DSLR", "Digital SLR", "Digital SLR Camera", "SLR", "HD Movie", "Movie", "DIGIC", "CMOS", "1920x1080p", "1080p", "Full HD", "24fps", "25fps", "30fps", "DSLR video", "video recording", "video", "lens", "APS-C", "photography", "photo", "picture", "image", "take stories", "camera", "recording", "sample video", "demonstration", "example", "Canon 550D"],
        "loaderUrl": "https://www.youtube.com/watch?v=3f7l-Z4NF70",
        "videoId": "3f7l-Z4NF70",
        "title": "Canon EOS 550D DSLR Camera - Sample video - Canon",
        "timestamp": "1484780081",
        "avgRating": "4.75959444046",
        "thumbnailUrl": "https://i.ytimg.com/vi/3f7l-Z4NF70/default.jpg",
        "description": "A sample video from the new Canon 550D DSLR camera, shot at 1920x1080 resolution (30fps) and optimised for YouTube.\n\nOffering Full HD movie recording with manual control and selectable frame rates, the EOS 550D allows you to capture your images and videos in stunning detail.\n\nFind out more about the 550D here: http://bit.ly/R4e9MB",
        "viewCount": "1402914"
    };
    const url = `/api/v1/video/info/${videoId}`;

    return new Promise((resolve, reject) => {
        request(server.listen()).get(url).then((res) => {
            let body = res.body;

            t.is(res.status, 200);
            t.is(body.videoId, expectedReturn.videoId);
            t.is(body.author, expectedReturn.author);
            t.is(body.title, expectedReturn.title);
            return resolve();
        });
    });
});
