export const UPDATE_MAIN_VID = 'update_main_vid';

export function updateMainVid(vidId) { 
 
    return{
        type: UPDATE_MAIN_VID,
        payload: vidId
    }
}