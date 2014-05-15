function findLastDigit(numberToCheck) {

    var lastDigit = numberToCheck % 10;
    var lastDigitWord = "";

    switch (lastDigit) {
        case 0:
            lastDigitWord = "zero";
            break;
        case 1:
            lastDigitWord = "one";
            break;
        case 2:
            lastDigitWord = "two";
            break;
        case 3 :
            lastDigitWord = "three";
            break;
        case 4:
            lastDigitWord = "four";
            break;
        case 5:
            lastDigitWord = "five";
            break;
        case 6:
            lastDigitWord = "six";
            break;
        case 7:
            lastDigitWord = "seven";
            break;
        case 8:
            lastDigitWord = "eight";
            break;
        case 9:
            lastDigitWord = "nine";
            break;
        default :
            lastDigitWord = "Oooops"
    }
    return lastDigitWord;
}

function typeLastDigit() {
    var readInputValue = readInput("last-digit-input");
    var typeLast = findLastDigit(readInputValue); // Yes it's redundant, but otherwise was ugly.

    document.getElementById("last-digit-output").value = typeLast;
}
