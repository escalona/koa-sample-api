import VideoModel from '../models/video-model';

const VideoController = {
    * getVideoInfo() {
        let videoId = this.params.videoId;

        yield VideoModel.getVideoInfo(videoId).then((results) => {
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

            return this.body = returnData;
        }).catch((err) => {
            console.error(err.stack);
            return this.body = {error: true};
        });
    }
};

export default VideoController;