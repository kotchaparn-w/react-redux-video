import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

class App extends Component {

  // componentDidMount(){
  //   this.props.fetchData.fetchVideos();
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.props.videos.id}
        </p>
      </div>
    );
  }
}

function mapStatetoProps(state){
  return{
    videos: state.videos
  }
}

export default connect(mapStatetoProps)(App);