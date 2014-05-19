function findSubstring(text, searched) {
    text = text.toLowerCase();
    searched = searched.toLowerCase();
    var occurrences = 0;
    var index = text.indexOf(searched, 0);

    while (index != -1) {
        occurrences += 1;
        index = text.indexOf(searched, index + searched.length);
    }

    return occurrences
}

function showResult() {
    var textInput = document.getElementById('text').value;
    var substring = document.getElementById('substring').value;
    document.getElementById('result').value = findSubstring(textInput, substring)
}