function printAndSum(start, end) {
    let sum = 0;
    let numbersString = ''; 

    for (let number = start; number <= end; number++) {
        numbersString += number + ' '; 
        sum += number;
    }

    console.log(numbersString.trim()); 
    console.log('Sum: ' + sum);
}
