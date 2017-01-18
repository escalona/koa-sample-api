import VideoModel from '../models/video-model';

const VideoController = {
    * getVideoInfo() {
        let videoId = this.params.videoId;

        yield VideoModel.getVideoInfo(videoId).then((results) => {
            return this.body = results;
        }).catch((err) => {
            console.error(err.stack);
            return this.body = {error: true};
        });
    }
};

export default VideoController;