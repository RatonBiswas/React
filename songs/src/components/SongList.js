import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SelectedSong} from '../actions'

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>this.props.SelectedSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
    render() {
        // console.log(this.props)

        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {songs: state.song}
}

export default connect(mapStateToProps,{SelectedSong})(SongList);