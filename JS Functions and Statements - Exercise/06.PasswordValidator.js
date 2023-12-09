function passwordValidator(password) {

    function isValidLength(text) {
        return text.length >= 6 && text.length <= 10;
    }

    function isOfDigitsAndLetters(text) {
        let regex = /^[a-zA-Z0-9]+$/gm;
        let isCorrect = regex.test(text);
        return isCorrect;
    }

    function has2Digits(text) {
        let digitCounter = 0;

        for (const digit of text) {
            if (!isNaN(digit)) {
                digitCounter++;
            }
        }
        return digitCounter >= 2;
    }
    let validLength = isValidLength(password);
    let digitsAndLetters = isOfDigitsAndLetters(password);
    let moreThan2Digits = has2Digits(password);

    if (!validLength) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!digitsAndLetters) {
        console.log("Password must consist only of letters and digits");
    }
    if (!moreThan2Digits) {
        console.log("Password must have at least 2 digits");
    }
    if(validLength && digitsAndLetters && moreThan2Digits){
        console.log("Password is valid");
    }
}