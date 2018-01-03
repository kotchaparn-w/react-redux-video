import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { connect } from "react-redux";
import * as moment from 'moment';
import _ from "lodash";

class VideosLists extends Component{

    renderVideoLists(video){
            return(
                <Card fluid key={video.id.videoId} style={{cursor: 'pointer'}}
                image={video.snippet.thumbnails.medium.url}
                header={video.snippet.title}
                meta={`Published on: ${moment(video.snippet.publishedAt).format("MMM DD, YYYY")}`}
                description={`By: ${video.snippet.channelTitle}`}
                />
            );
        
    }

    render(){
        console.log(this.props)
        return(
            <Grid.Column width={4} className={_.isEmpty(this.props.videos) ? "" : "video_lists"}>
                {this.props.videos.map(this.renderVideoLists)}
            </Grid.Column>
        )
    }
}

function mapStateToProps(state){
    return { videos : state.videos }
}
export default connect(mapStateToProps)(VideosLists);