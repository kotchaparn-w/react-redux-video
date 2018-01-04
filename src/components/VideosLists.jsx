import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { connect } from "react-redux";
import * as moment from 'moment';
import _ from "lodash";
// import  { bindActionCreators } from "redux";
import * as action from '../actions/update_main_vid';

class VideosLists extends Component{

    render(){        
        console.log(this.props)
        return(
            <Grid.Column width={4} className={_.isEmpty(this.props.videosState.videos) ? "" : "video_lists"}>
                {this.props.videosState.videos.lists.map(video=>{
                    return(
                        <Card fluid key={video.id.videoId} style={{cursor: 'pointer'}}
                        image={video.snippet.thumbnails.medium.url}
                        header={video.snippet.title}
                        meta={`Published on: ${moment(video.snippet.publishedAt).format("MMM DD, YYYY")}`}
                        description={`By: ${video.snippet.channelTitle}`}
                        onClick={()=>this.props.updateMainVid(video.id.videoId)}
                        />
                    )
                })}
            </Grid.Column>
        )
    }
}

function mapStateToProps(videosState){
    return { videosState }
}

// function mapDispatchtoProps(dispatch){
//     return bindActionCreators({updateMainVid},dispatch)
// }
export default connect(mapStateToProps, action)(VideosLists);