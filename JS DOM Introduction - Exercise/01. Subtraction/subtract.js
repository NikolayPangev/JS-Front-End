function subtract() {
    var firstNumberValue = document.getElementById("firstNumber").value;
    var secondNumberValue = document.getElementById("secondNumber").value;

    var firstNumber = parseFloat(firstNumberValue);
    var secondNumber = parseFloat(secondNumberValue);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        var result = firstNumber - secondNumber;

        var resultDiv = document.getElementById("result");
        resultDiv.textContent = '' + result;
    }
}