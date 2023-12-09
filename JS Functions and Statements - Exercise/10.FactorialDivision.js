function factorialDivision(num1, num2) {
    let factorialOne = 1;
    let factorialTwo = 1;

    for (let i = 1; i <= num1; i++) {
        factorialOne *= i;
    }

    for (let i = 1; i <= num2; i++) {
        factorialTwo *= i;
    }

    let division = (num1, num2) => {
        return num1 / num2;
    }

    console.log(division(factorialOne, factorialTwo).toFixed(2));
}