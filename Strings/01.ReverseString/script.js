function reverse(elementId) {

    var input = document.getElementById(elementId).value;
    var result = '';

    for (var i = input.length - 1; i >= 0; i -= 1) {
        result += input[i];
    }

    return result;
}

function reverseOnClick() {
    document.getElementById('result').value = reverse('input');
}