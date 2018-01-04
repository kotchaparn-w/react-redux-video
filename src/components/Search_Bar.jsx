import React, { Component } from "react";
import { Input } from 'semantic-ui-react';
import { connect } from "react-redux";
// import  { bindActionCreators } from "redux";
import  * as action  from "../actions/fetch_videos";


class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            term : ""
        }
    }

    render() {
        return (
            <div>
                <Input fluid action={{ icon: 'search', 
                onClick: ()=>this.props.fetchVideos(this.state.term)}} 
                placeholder='Search...' 
                onChange={(e)=>this.setState({term: e.target.value})}
                />   
            </div>
        )
    }
}

// function mapDispatchtoProps(dispatch){
//     return bindActionCreators({fetchVideos},dispatch)
// }

export default connect(null, action)(SearchBar);
