function sortingNumbers(numbers) {
    let resultArr = [];
    let sortedArr = numbers.sort((a, b) => a - b);
    let arrLength = numbers.length;

    for (let i = 0; i < arrLength; i++) {
        if (i % 2 == 0) {
            resultArr.push(sortedArr.shift());
        } else {
            resultArr.push(sortedArr.pop());
        }
    }
    return resultArr;
}