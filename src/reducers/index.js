import { combineReducers } from "redux";

import YoutubeVideos from "./reducer_videos";

const rootReducers = combineReducers({
    videos: YoutubeVideos
})

export default rootReducers;