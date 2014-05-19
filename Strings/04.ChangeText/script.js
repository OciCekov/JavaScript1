
function replaceText(text) {
    var newText = '';
    var state = [];

    for (var i = 0; i < text.length; i += 1) {
        if (text[i] + text[i + 1] == '<u') {
            state.push('upper');
            i += 7;
        }

        else if (text[i] + text[i + 1] == '<l') {
            state.push('lower');
            i += 8;
        }

        else if (text[i] + text[i + 1] == '<m') {
            state.push('mixed');
            i += 8;
        }
        else if (text[i] + text[i + 1] + text[i + 2] === "</u") {
            i += 8;
            state.pop();
        }
        else if (text[i] + text[i + 1] + text[i + 2] === "</l") {
            i += 9;
            state.pop();
        }
        else if (text[i] + text[i + 1] + text[i + 2] === "</m") {
            i += 9;
            state.pop();
        }
        else {
            var trace = state[state.length - 1];
            if (trace === 'upper') {
                newText += text[i].toUpperCase();
            }
            else if (trace === 'lower') {
                newText += text[i].toLowerCase();
            }
            else if (trace === 'mixed') {
                if (i % 2 == 0) {
                    newText += text[i].toLowerCase()
                } else {
                    newText += text[i].toUpperCase();
                }
            }
            else {
                newText += text[i];
            }
        }
    }
    return newText;
}

function showResult() {
    var text = document.getElementById('input').value;

    document.getElementById('result').value = replaceText(text);
}