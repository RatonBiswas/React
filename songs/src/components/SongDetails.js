import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Select A Song</div>;
  }
  return (
    <div>
      <h3>Details for : </h3>
      <p>
        Teacher : {song.title}
        <br/>
        Duration : {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
