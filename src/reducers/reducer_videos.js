import { FETCH_VIDEOS }  from '../actions/fetch_videos';
import { UPDATE_MAIN_VID }  from '../actions/update_main_vid';
import { FETCH_CHANNEL_INFO}  from '../actions/fetch_channel_info';
import _ from "lodash";

export default function(state={lists:[], mainVideo:{}, mainVidChannel: {}}, action) {

    switch (action.type){
        case FETCH_VIDEOS:
            const videoInfo = action.payload.data.items;
            // set the first result as the main Vid
            return {...state, lists: videoInfo, mainVideo: videoInfo[0]}  
        case UPDATE_MAIN_VID:
            if(!_.isEmpty(state.lists)){
                return {...state, mainVideo : _.find(state.lists, ['id.videoId', action.payload])}
            }  
            return {...state}
        case FETCH_CHANNEL_INFO:
            return {...state, mainVidChannel: action.payload.data}
        default: 
            return state;
    }

    
}