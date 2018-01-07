import axios from 'axios';
export const FETCH_CHANNEL_INFO = 'fetch_channel_info';

export default function fetchChannelInfo(channelId){

    const URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyBpagFYIeClY7UL3yPj6eQxlbsiBzQ9egw`;
    return{
        type: FETCH_CHANNEL_INFO,
        payload: axios.get(URL)
    }
    

}