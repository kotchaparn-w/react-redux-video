import React, { Component } from 'react';
import { Grid, Embed, Header, Image, Segment, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import _ from 'lodash'
import fetchChannelInfo from "../actions/fetch_channel_info";
import Search from 'semantic-ui-react/dist/commonjs/modules/Search/Search';
import * as moment from 'moment';

class MainVideo extends Component{

    componentDidUpdate(prevProps){
        if(!_.isEqual(prevProps.mainVideo.videos.mainVideo, this.props.mainVideo.videos.mainVideo)){
            this.props.fetchChannelInfo(this.props.mainVideo.videos.mainVideo.snippet.channelId);
        } 
    }

    render(){
        // render only when there is data in the main video
        if (!_.isEmpty(this.props.mainVideo.videos.mainVideo)){
            // console.log(this.props)
            const videoId = this.props.mainVideo.videos.mainVideo.id.videoId;
            const videoThumbnail = this.props.mainVideo.videos.mainVideo.snippet.thumbnails.high.url;
            const { title, channelTitle, publishedAt, description } = this.props.mainVideo.videos.mainVideo.snippet;
            return(
                <Grid.Column width={12}>
                    <Grid.Row>
                    <Embed
                        id={videoId}
                        placeholder={videoThumbnail}
                        source='youtube'
                    />
                    </Grid.Row>
                    <Grid.Row className="video_title">
                        <Header as="h2" content={title}/>
                    </Grid.Row>
                    <Grid>
                        <Grid.Row >
                            <Grid.Column width={2}>
                                    <Image circular src={_.isEmpty(this.props.mainVideo.videos.mainVidChannel)? null : this.props.mainVideo.videos.mainVidChannel.items[0].snippet.thumbnails.default.url} />
                            </Grid.Column>
                            <Grid.Column width={7}>      
                                <h4 className="channel_title">{channelTitle}</h4>   
                                <p className="published_date">{`Published on ${moment(publishedAt).format("MMM DD, YYYY")}`}</p>   
                            </Grid.Column>
                            <Grid.Column width={5}>      
                                <Button.Group>
                                    <Button positive>Save</Button>
                                    <Button.Or />
                                    <Button negative disabled>Delete from list</Button>
                                </Button.Group>
                            </Grid.Column>         
                        </Grid.Row>
                        <Divider />
                    </Grid>

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

function mapDispatchtoProps(dispatch){
    return bindActionCreators({fetchChannelInfo},dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(MainVideo);