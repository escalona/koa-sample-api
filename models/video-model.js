import YoutubeService from '../services/youtube-service';

const VideoModel = {
    getVideoInfo(videoId) {
        return YoutubeService.getVideoMetaData(videoId).then(function (results) {
            let returnData = {};

            if (results) {
                returnData = {
                    author: results.author,
                    keywords: results.keywords,
                    loaderUrl: results.loaderUrl,
                    videoId: results.video_id,
                    title: results.title,
                    timestamp: results.timestamp,
                    avgRating: results.avg_rating,
                    thumbnailUrl: results.thumbnail_url,
                    description: results.description,
                    viewCount: results.view_count,
                };
            }

            return returnData;
        });
    }
};

export default VideoModel;