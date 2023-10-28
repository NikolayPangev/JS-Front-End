function sumDigits(number) {
    let sum = 0;
    let numAsString = String(number);
    for (let i = 0; i < numAsString.length; i++) {
        sum += parseInt(numAsString[i]);
    }
    console.log(sum);
}