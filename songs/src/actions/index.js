// Action Creator

export const SelectedSong = song => {
  // Return An Action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
