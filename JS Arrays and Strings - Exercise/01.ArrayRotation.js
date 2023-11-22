function arrayRotation(inputArray, rotations) {
    let array = [];
    let output = '';
    array = inputArray;
    for (let i = 0; i < rotations; i++) {
        array.push(array.shift());
    }
    for(let i = 0; i < array.length; i++){
        output += array[i] + ' ';
    }

    console.log(output);
}