//6. Quadratic Equation
function quadraticEquation() {
    var inputA = parseFloat(document.getElementById("quadratic-a-input").value);
    var inputC = parseFloat(document.getElementById("quadratic-b-input").value);
    var inputB = parseFloat(document.getElementById("quadratic-c-input").value);
    var firstRoot;
    var secondRoot;
    var determinant = (inputB * inputB) - (4 * inputA * inputC);

    if (determinant < 0) {
        document.getElementById("quadratic-x1-output").value = "No real roots";
        document.getElementById("quadratic-x2-output").value = "No real roots";
    }
    else if (determinant === 0) {
        firstRoot = -inputB / (inputA * 2);
        document.getElementById("quadratic-x1-output").value = firstRoot;
        document.getElementById("quadratic-x2-output").value = "No real root";
    }
    else {
        if (inputA === 0) {
            firstRoot = (-inputB + Math.sqrt(determinant));
            document.getElementById("quadratic-x1-output").value = firstRoot;
            secondRoot = (-inputB - Math.sqrt(determinant));
            document.getElementById("quadratic-x2-output").value = secondRoot;
            return;
        }
        firstRoot = (-inputB + Math.sqrt(determinant)) / (2 * inputA);
        document.getElementById("quadratic-x1-output").value = firstRoot;
        secondRoot = (-inputB - Math.sqrt(determinant)) / (2 * inputA);
        document.getElementById("quadratic-x2-output").value = secondRoot;
    }
}

//7. Greatest out of five
function greatestOfFive() {
    var greatestInput = document.getElementById("greatest-input").value;

    greatestInput = greatestInput.split(", ");

    var greatestFirstInput = parseFloat(greatestInput[0]);
    var greatestSecondInput = parseFloat(greatestInput[1]);
    var greatestThirdInput = parseFloat(greatestInput[2]);
    var greatestFourthInput = parseFloat(greatestInput[3]);
    var greatestFifthInput = parseFloat(greatestInput[4]);

    var greatestOfFive = greatestFirstInput;

    if (greatestOfFive < greatestSecondInput) {
        greatestOfFive = greatestSecondInput;
    }
    if (greatestOfFive < greatestThirdInput) {
        greatestOfFive = greatestThirdInput;
    }
    if (greatestOfFive < greatestFourthInput) {
        greatestOfFive = greatestFourthInput;
    }
    if (greatestOfFive < greatestFifthInput) {
        greatestOfFive = greatestFifthInput;
    }
    document.getElementById("greatest-output").value = greatestOfFive;
}

//8. Tell the number
function tellNumber() {
    var numInput = parseInt(document.getElementById("tell-number-input").value);

    var result;
    switch (parseInt((numInput / 100))) {
        case 1:
            result = "one hundred ";
            break;
        case 2:
            result = "two hundreds ";
            break;
        case 3:
            result = "three hundreds ";
            break;
        case 4:
            result = "four hundreds ";
            break;
        case 5:
            result = "five hundreds ";
            break;
        case 6:
            result = "six hundreds ";
            break;
        case 7:
            result = "seven hundreds ";
            break;
        case 8:
            result = "eight hundreds ";
            break;
        case 9:
            result = "nine hundreds ";
            break;
        case 0:
            result = "";
            break;
        default:
            result = "Invalid number";
            document.getElementById("result").value = result;
            return;
    }

    if (parseInt(numInput / 100) !== 0) {
        result += "and "
    }

    switch (parseInt((numInput / 10)) % 10) {
        case 0:
            break;
        case 1:
        {
            switch (numInput % 10) {
                case 0:
                    result += "ten ";
                    break;
                case 1:
                    result += "eleven ";
                    break;
                case 2:
                    result += "twelve ";
                    break;
                case 3:
                    result += "thirteen ";
                    break;
                case 4:
                    result += "fourteen ";
                    break;
                case 5:
                    result += "fifteen ";
                    break;
                case 6:
                    result += "sixteen ";
                    break;
                case 7:
                    result += "seventeen ";
                    break;
                case 8:
                    result += "eighteen ";
                    break;
                case 9:
                    result += "nineteen ";
                    break;
            }
        }
            break;
        case 2:
            result += "twenty ";
            break;
        case 3:
            result += "thirty ";
            break;
        case 4:
            result += "forty ";
            break;
        case 5:
            result += "fifty ";
            break;
        case 6:
            result += "sixty ";
            break;
        case 7:
            result += "seventy ";
            break;
        case 8:
            result += "eighty ";
            break;
        case 9:
            result += "ninety ";
            break;
        default:
            break;
    }
    if (parseInt(numInput / 10) % 10 !== 1) {
        switch (numInput % 10) {
            case 0:
                if (numInput === 0) {
                    result += "Zero.";
                }
                break;
            case 1:
                result += "one";
                break;
            case 2:
                result += "two";
                break;
            case 3:
                result += "three";
                break;
            case 4:
                result += "four";
                break;
            case 5:
                result += "five";
                break;
            case 6:
                result += "six";
                break;
            case 7:
                result += "seven";
                break;
            case 8:
                result += "eight";
                break;
            case 9:
                result += "nine";
                break;
        }
    }
    document.getElementById("tell-number-output").value = result;
}