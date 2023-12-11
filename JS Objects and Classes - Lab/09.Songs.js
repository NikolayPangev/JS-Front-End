function song(arrStr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = Number(arrStr.shift()); 
    let typeSong = arrStr.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = arrStr[i].split('_');
        let newSong = new Song(type, name, time);
        songs.push(newSong);
    }

    if (typeSong === 'all') {
        songs.forEach((song) => console.log(song.name));
    } else {
        let filtered = songs.filter((song) => song.typeList === typeSong);
        filtered.forEach((song) => console.log(song.name));
    }
}