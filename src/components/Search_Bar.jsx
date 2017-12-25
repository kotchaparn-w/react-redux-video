import React, { Component } from "react";
import { Input } from 'semantic-ui-react';


export default class SearchBar extends Component {

    render() {
        return (
            <div>
                <Input fluid action={{ icon: 'search' }} placeholder='Search...' />   
            </div>
        )
    }
}