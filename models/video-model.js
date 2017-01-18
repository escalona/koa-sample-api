import YoutubeService from '../services/youtube-service';

const VideoModel = {
    getVideoInfo(videoId) {
        return YoutubeService.getVideoMetaData(videoId).then(function (results) {
            return results;
        });
    }
};

export default VideoModel;