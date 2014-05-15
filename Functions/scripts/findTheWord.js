function findTheWord(text, word, isSensitive) {

    text = text.split(' ');
    var occurrences = 0;

    for (var i = 0, len = text.length; i < len; i += 1) {
        if (isSensitive === true) {
            if (text[i] === word) {
                occurrences += 1;
            }
        }
        else {
            if (text[i].toLowerCase() === word.toLowerCase()) {
                occurrences += 1;
            }
        }
    }
    return occurrences;
}

function typeResult() {
    var input = readInput('text-input', 'word-input');
    var text = input[0];
    var word = input[1];
    var isSensitive;

    if (document.getElementById('case-sensitive').checked) {
        isSensitive = true;
    } else if (document.getElementById('case-insensitive').checked) {
        isSensitive = false;
    }

    var result = findTheWord(text, word, isSensitive);

    document.getElementById('find-word-output').value = 'your word: "' + word + '" is found ' + result + 'times';
}