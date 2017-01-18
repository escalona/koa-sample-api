import test from 'ava';
import YoutubeService from './youtube-service';

test('constructYoutubeUrl: should return url', t => {
    let youtubeUrl = YoutubeService.constructYoutubeUrl('A02s8omM_hI');
    t.is(youtubeUrl, 'http://www.youtube.com/watch?v=A02s8omM_hI');
});
