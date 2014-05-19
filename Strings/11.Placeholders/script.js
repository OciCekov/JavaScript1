String.format = function format() {
    var text = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var placeholder = "{" + (i - 1) + "}";
        var ind = text.indexOf(placeholder);
        while (ind !== -1) {
            text = text.replace(placeholder, arguments[i]);
            ind = text.indexOf(placeholder, ind + 1);
        }
    }
    return text;
};
(function showResult(){
    var theString = '{0}, {1}, {0} text {2} {3}';
    var formatted = String.format(theString, 1, 'Pesho', 'Gosho', '!');

    document.getElementById('input').value= theString;
    document.getElementById('result').value = formatted;
}());