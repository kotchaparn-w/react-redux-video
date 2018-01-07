import React, { Component } from "react";
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from "react-redux";
// import  { bindActionCreators } from "redux";
// import  * as action  from "../actions/fetch_videos";


class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment : ""
        }
    }

    render() {
        return (
            <Form>
                <TextArea autoHeight placeholder='Comment' rows={2} />
            </Form>
        )
    }
}

// function mapDispatchtoProps(dispatch){
//     return bindActionCreators({fetchVideos},dispatch)
// }

export default TextArea;