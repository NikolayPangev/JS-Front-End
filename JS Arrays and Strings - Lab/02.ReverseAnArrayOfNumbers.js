function reverse(num, inputArray){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(inputArray[i]);
    }

    let output = '';
    for(let j = arr.length - 1; j >= 0; j--){
        output += arr[j] + ' ';
    }
    console.log(output);
}