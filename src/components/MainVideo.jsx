import React, { Component } from 'react';
import { Grid, Embed } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash'


class MainVideo extends Component{

    render(){
        // render only when there is data in the main video
        if (!_.isEmpty(this.props.mainVideo.videos.mainVideo)){
            console.log(this.props);
            const videoId = this.props.mainVideo.videos.mainVideo.id.videoId;
            const videoThumbnail = this.props.mainVideo.videos.mainVideo.snippet.thumbnails.high.url;
            return(
                <Grid.Column width={12}>
                    <Embed
                        id={videoId}
                        placeholder={videoThumbnail}
                        source='youtube'
                    />
                </Grid.Column>
            )
        } else {
            return <div/>
        }
        
    }
}

function mapStateToProps(mainVideo){
    return {mainVideo}
}

export default connect(mapStateToProps)(MainVideo);