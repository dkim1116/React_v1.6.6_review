import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Rainy Day Loop', duration: '3:45' },
        { title: 'Halcyon', duration: '5:13' },
        { title: 'Pope is a rockstar', duration: '3:51' },
        { title: 'Missing You', duration: '4:34' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});