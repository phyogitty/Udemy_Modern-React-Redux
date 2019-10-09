import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
        { title: 'Symphony', duration: '4:05' },
        { title: 'Senorita', duration: '3:53' },
        { title: 'Lover', duration: '2:10' },
        { title: 'Havana', duration: '5:11' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;  
}

export default  combineReducers( {
	songs: songsReducer,
    selectedSong: selectedSongReducer
});