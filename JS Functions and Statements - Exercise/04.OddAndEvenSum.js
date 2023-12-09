function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = number.toString();

    for (let i = 0; i < numberAsString.length; i++) {
        let digit = Number(numberAsString[i]);

        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}