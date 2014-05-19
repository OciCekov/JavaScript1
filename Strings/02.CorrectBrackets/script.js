function checkBrackets(expression) {
    var openingBracket = 0;
    var closingBracket = 0;

    for (var i = 0; i < expression.length; i += 1) {
        if (expression[i] === '(') {
            openingBracket += 1;
        }
        if (expression[i] === ')') {
            closingBracket += 1;
        }
    }
    return openingBracket == closingBracket ? 'You got that wright' : 'Not quite wright'
}

function showResult() {
    var input = document.getElementById('input').value;

    document.getElementById('result').value = checkBrackets(input);
}