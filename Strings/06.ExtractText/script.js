function extract(text) {
    var newText = '';
    var tag = false;

    for (var i = 0; i < text.length; i += 1) {
        if (text[i] == '<') {
            tag = true;
        } else if (text[i] == '>') {
            tag = false;
        } else {
            if (!tag) {
                newText += text[i];
            }
        }
    }
    return newText;
}
function showResult() {
    var text = document.getElementById('input').value;
    document.getElementById('result').value = extract(text);
}