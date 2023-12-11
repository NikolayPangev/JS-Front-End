function towns(arrStr) {
    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = parseFloat(latitude).toFixed(2);
            this.longitude = parseFloat(longitude).toFixed(2);
        }

        toString() {
            return `{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`;
        }
    }

    const townInstances = [];

    for (let index = 0; index < arrStr.length; index++) {
        const townInfo = arrStr[index].split(' | ');
        const [town, latitude, longitude] = townInfo;
        const newTown = new Town(town, latitude, longitude);
        townInstances.push(newTown);
    }

    townInstances.forEach(town => console.log(town.toString()));
}