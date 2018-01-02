import axios from 'axios';
export const FETCH_VIDEOS = 'fect_videos';

export default function fetchVideos(content) { 
    // replace space with +
    const query = content.replace(/ /g , "+");
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyBpagFYIeClY7UL3yPj6eQxlbsiBzQ9egw`;

    return{
        type: FETCH_VIDEOS,
        payload: axios.get(URL)
    }
}