import React, { Component } from 'react';
import MainHeader from './MainHeader';
import { Grid } from 'semantic-ui-react';
import MainVideo from "./MainVideo";
import VideosLists from "./VideosLists";
import "../style.css";


class App extends Component {
  
  render(){
    return(
      <div>
        <MainHeader />
        <Grid container>
          <Grid.Row>
            <MainVideo />
            <VideosLists />
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;