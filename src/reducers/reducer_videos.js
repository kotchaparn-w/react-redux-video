import { FETCH_VIDEOS } from '../actions/fetch_videos';

export default function(state={}, action) {

    console.log(action.payload);
    switch (action.type){
        case FETCH_VIDEOS:
            return action.payload.data
        default: 
            return state;
    }

    
}