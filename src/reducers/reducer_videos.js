import { FETCH_VIDEOS }  from '../actions/fetch_videos';
import {UPDATE_MAIN_VID }  from '../actions/update_main_vid';
import _ from "lodash";

export default function(state={lists:[], mainVideo:{}}, action) {

    switch (action.type){
        case FETCH_VIDEOS:
            const videoInfo = action.payload.data.items;
            return {...state, lists: videoInfo, mainVideo: videoInfo[0]}
            
        case UPDATE_MAIN_VID:
            if(!_.isEmpty(state.lists)){
     
                console.log(_.find(state.lists, ['id.videoId', action.payload]));
                return {...state, mainVideo : _.find(state.lists, ['id.videoId', action.payload])}
            }  
            return {...state}
        default: 
            return state;
    }

    
}