export const FETCH_VIDEOS = 'fect_videos';

export default function fetchVideos(content) { 

    console.log(content);

    return{
        type: FETCH_VIDEOS,
        payload: {
            
        }
    }
}