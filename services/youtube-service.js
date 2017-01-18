import Promise from 'bluebird';
import ytdl from 'ytdl-core';

const YoutubeService = {
    constructYoutubeUrl(videoId) {
        const baseUrl = 'http://www.youtube.com/watch?v=';
        return baseUrl + videoId;
    },

    getVideoMetaData(videoId) {
        return new Promise((resolve, reject) => {
            let youtubeUrl = this.constructYoutubeUrl(videoId);
            ytdl.getInfo(youtubeUrl, function (err, info) {
                if (err) {
                    return reject(err);
                }

                return resolve(info);
            });
        });
    }
};

export default YoutubeService;