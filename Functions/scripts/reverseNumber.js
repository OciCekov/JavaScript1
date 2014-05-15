function reverse(numberToReverse) {
    var number = numberToReverse.split('');
    var reversed = [];

    for (var i = number.length-1; 0 <= i; i -= 1) {
        reversed.push(number[i]);
    }
    return reversed
}

function typeReversed() {
    var readInputValue = readInput("reverse-input");

    document.getElementById("reverse-output").value = reverse(readInputValue).join('');
}