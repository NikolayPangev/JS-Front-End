function sameNumbers(number) {
    let numAsString = String(number);
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== numAsString[0]) {
            isSame = false;
        }

        sum += parseInt(numAsString[i]);
    }

    if (isSame) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sum);
}
