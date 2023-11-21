function sumElements(inputArr){
    let firstEl = inputArr[0];
    let lastEl = inputArr[inputArr.length - 1];
    let sum = firstEl + lastEl;
    console.log(sum);
}

sumElements([10, 17, 22, 33])