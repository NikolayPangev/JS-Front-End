function print(inputArray, number) {
    let newArr = [];
    for (let i = 0; i < inputArray.length; i += number) {
        newArr.push(inputArray[i]);
    }

    return newArr;
}