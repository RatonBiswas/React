import {combineReducers} from 'redux'


const songReducer = () =>{
    return [
        {title: 'No Scrubs',duration:'4.05'},
        {title: 'Macarena',duration:'2.30'},
        {title: 'All Star',duration:'3.15'},
        {title: 'I Want it That Way',duration:'1.45'}
    ];
};

const selectedSongReducer = (selecedSong = null,action)=>{
    if(action.type === 'SONG_SELECTED'){
            return action.payload
    }
    return selecedSong;
}

export default combineReducers({
    song: songReducer,
    selectedSong: selectedSongReducer
})