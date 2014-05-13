function takeOneToN(endNumber) {
    var output = [];
    var i;

    if (endNumber < 0) {
        for (i = 1; i >= endNumber; i -= 1) {
            output.push(i);
        }
    }
    else {
        for (i = 1; i <= endNumber; i += 1) {
            output.push(i);
        }
    }
    return output;
}

function displayOneToN() {
    var finalNumber = parseFloat(document.getElementById("to-n-input").value);

    var result = takeOneToN(finalNumber);
    document.getElementById("to-n-output").value = result + ';';
}