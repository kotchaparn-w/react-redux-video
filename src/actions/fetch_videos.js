export const FETCH_VIDEOS = 'fect_videos';

export function fetchVideos() {
    return{
        type: FETCH_VIDEOS,
        payload: {
            id: 3,
            content: 'zxcvbn'
        }
    }
}