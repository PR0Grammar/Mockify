import React, { Component } from 'react';
import {isNil} from 'lodash'
import { connect } from 'react-redux';
/**
 * @todo: find a working library for background audio
 */

class AudioStreamer extends Component {
    constructor(props) {
        super(props);
    }

    renderPlayer() {
        console.log('hit')
    }
    
    render() {
        return (
            <>
            {!isNil(this.props.url) &&
                this.renderPlayer()
            }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        url: state.selectedSong.url
    }
}

export default connect(mapStateToProps)(AudioStreamer);