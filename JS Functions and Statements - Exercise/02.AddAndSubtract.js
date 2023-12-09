function addAndSubtract(num1, num2, num3) {
    let sum = (num1, num2) => {
        return num1 + num2;
    }

    let subtract = (sum, num3) => {
        return sum - num3;
    }

    let result = subtract(sum(num1, num2), num3);
    console.log(result);
}