import React, { Component } from 'react';
import { Grid, Embed } from 'semantic-ui-react';


class MainVideo extends Component{
    render(){
        return(
            <Grid.Column width={12}>
                <Embed
                    id='O6Xo21L0ybE'
                    placeholder='/assets/images/image-16by9.png'
                    source='youtube'
                />
            </Grid.Column>
        )
    }
}

export default MainVideo;