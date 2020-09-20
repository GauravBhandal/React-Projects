import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Masoomiyat', duration: '4:15' },
        {  title: 'Maahi Ve', duration: '6:08' },
        { title: 'Ikko Mikke', duration: '5:15' },
        { title: 'Blessings', duration: '3:54' }
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})