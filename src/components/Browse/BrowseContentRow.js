import React, { Component } from 'react';
import { ContentRow } from '../common';


class BrowseContentRow extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <ContentRow
                header='Get Yo Cray On'
            />
        );
    }
}

export default BrowseContentRow;