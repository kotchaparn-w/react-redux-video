import React from 'react';
import { Header, Segment, Icon, Grid } from 'semantic-ui-react';
import SearchBar from './Search_Bar';

const MainHeader = () => (
    <Segment>
        <Grid container columns='equal'>
        <Grid.Column>
            <Header as='h3' ><Icon inverted color='red' name="youtube play"/>YouDux</Header>
        </Grid.Column>
        <Grid.Column width={8}>
            <SearchBar />
        </Grid.Column>
        <Grid.Column>
            <Header as="h3" textAlign="right">Welcome</Header>
        </Grid.Column>
      </Grid>
    </Segment> 
)

export default MainHeader;