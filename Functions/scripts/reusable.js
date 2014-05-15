// To read from the fields.

function readInput(firstInput, secondInput) {


    switch (arguments.length) {
        case 1:
            return oneTextInput(firstInput);
        case 2:
            return twoTextInputs(firstInput, secondInput);
        default : alert("Something went really, really, REALLY wrong"); // Yes I've just killed quality code with a shovel, but lets have some fun.
    }
}

function oneTextInput(input) {
    return document.getElementById(input).value;
}

function twoTextInputs(input, search) {
    var inputtedElements = [];

    inputtedElements[0] = document.getElementById(input).value;
    inputtedElements[1] = document.getElementById(search).value;

    return inputtedElements;
}