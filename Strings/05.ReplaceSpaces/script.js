function replaceSpaces(text) {
    text = text.split(' ');
    text = text.join('&nbsp;');
    return text;
}

function showResult() {
    var text = document.getElementById('input').value;
    document.getElementById('result').value = replaceSpaces(text);
}