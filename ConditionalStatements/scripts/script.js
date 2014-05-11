//TODO Create function to check for wrong inputs.
//In this file are tasks, from 1-5, check the other file for the rest
// 1. Two variables.
function twoVariables() {
    var variables = document.getElementById("two-variables-input").value;
    variables = variables.split(", ");
    var firstVar = parseInt(variables[0]);
    var secondVar = parseInt(variables[1]);

    if (firstVar > secondVar) {
        document.getElementById("two-variables-output").value = "The first is bigger";
    }
    else {
        firstVar = parseInt(variables[1]);
        secondVar = parseInt(variables[0]);
        document.getElementById("two-variables-output").value = "Second was bigger, so: " + firstVar + ", " + secondVar;
    }
}

// 2. Positive out of three.
function positiveNegative() {
    var positiveInput = document.getElementById("positive-negative-input").value; //We don't need negativity in our lives :)

    positiveInput = positiveInput.split(", ");

    var firstPos = parseInt(positiveInput[0]);
    var secondPos = parseInt(positiveInput[1]);
    var thirdPos = parseInt(positiveInput[2]);

    if (firstPos > 0 && secondPos > 0 && thirdPos > 0) {
        document.getElementById("positive-negative-output").value = "Positive";
    }
    else if (firstPos > 0 && secondPos < 0 && thirdPos < 0) {
        document.getElementById("positive-negative-output").value = "Positive";
    }
    else if (firstPos < 0 && secondPos > 0 && thirdPos < 0) {
        document.getElementById("positive-negative-output").value = "Positive";
    }
    else if (firstPos < 0 && secondPos < 0 && thirdPos > 0) {
        document.getElementById("positive-negative-output").value = "Positive";
    }
    else if (firstPos > 0 && secondPos < 0 && thirdPos > 0) {
        document.getElementById("positive-negative-output").value = "Negative";
    }
    else if (firstPos > 0 && secondPos > 0 && thirdPos < 0) {
        document.getElementById("positive-negative-output").value = "Negative";
    }
    else if (firstPos < 0 && secondPos < 0 && thirdPos < 0) {
        document.getElementById("positive-negative-output").value = "Negative";
    }
}

// 3. Biggest out of three.
function biggestOfThree() {
    var biggestInput = document.getElementById("biggest-input").value;

    biggestInput = biggestInput.split(", ");
    var bigFirst = parseInt(biggestInput[0]);
    var bigSecond = parseInt(biggestInput[1]);
    var bigThird = parseInt(biggestInput[2]);

    var bigger = 0; // oh the irony

    if (bigFirst > bigSecond) {
        if (bigFirst > bigThird) {
            bigger = bigFirst;
        }
        else {
            bigger = bigThird;
        }
    }
    else {
        if (bigSecond > bigThird) {
            bigger = bigSecond;
        }
        else {
            bigger = bigThird;
        }
    }
    document.getElementById("biggest-output").value = bigger;
}

//4.Sort descending
function descendingValues() {
    var descInput = document.getElementById("descending-input").value;

    descInput = descInput.split(", ");
    var descFirst = parseInt(descInput[0]);
    var descSecond = parseInt(descInput[1]);
    var descThird = parseInt(descInput[2]);
    var sorted = '';

    if (descFirst > descSecond) {
        if (descFirst > descThird) {
            sorted = descFirst;
            if (descSecond > descThird) {
                sorted += " " + descSecond + " " + descThird;
            }
            else {
                sorted += " " + descThird + " " + descSecond;
            }
        }
        else {
            sorted = descThird + " " + descFirst + " " + descSecond;
        }
    }
    else {
        if (descSecond > descThird) {
            sorted = descSecond;
            if (descThird > descFirst) {
                sorted += " " + descThird + " " + descFirst;
            }
            else {
                sorted += " " + descFirst + " " + descThird;
            }
        }
        else {
            sorted = descThird + " " + descSecond + " " + descFirst;
        }
    }
    document.getElementById("descending-output").value = sorted;
}

// 5. Tell the digit
function tellDigit() {
    var digit = parseInt(document.getElementById("digit-input").value);

    switch (digit) {
        case 0:
            document.getElementById("digit-output").value = "Zero, null, nada";
            break;   //That's where webstorm suggested to put this, i'm not sure about that
        case 1:
            document.getElementById("digit-output").value = "The One!";
            break;
        case 2:
            document.getElementById("digit-output").value = "Two";
            break;
        case 3:
            document.getElementById("digit-output").value = "Three!";
            break;
        case 4:
            document.getElementById("digit-output").value = "Four!";
            break;
        case 5:
            document.getElementById("digit-output").value = "Five!";
            break;
        case 6:
            document.getElementById("digit-output").value = "Six!";
            break;
        case 7:
            document.getElementById("digit-output").value = "Seven!";
            break;
        case 8:
            document.getElementById("digit-output").value = "Eight!";
            break;
        case 9:
            document.getElementById("digit-output").value = "Nine!";
            break;
        default :  document.getElementById("digit-output").value = "Sorry, I missed that";
            break;
    }
}