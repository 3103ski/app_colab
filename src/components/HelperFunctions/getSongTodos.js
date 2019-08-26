const getSongTodos = (projects, projectName, songName) => {
	let currSongs, currTodos;
	projects.map(project => {
		if (project.projectName === projectName) {
			currSongs = project.songs;
		}
		return project;
	});
	if (currSongs !== undefined) {
		currSongs.map(song => {
			if (song.name === songName) {
				currTodos = song.todos;
			}
			return song;
		});
	}
	return currTodos;
};

export default getSongTodos;
