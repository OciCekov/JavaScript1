function binarySearch() {
    var input = document.getElementById('binary-sequence-input').value;
    var searched = document.getElementById('binary-num-input').value;
    var sequence = input.trim().split(' ');
    var topBorder = sequence.length - 1;
    var bottomBorder = 0;

    sequence.sort(function (a, b) {
        return a - b;
    });

    while (topBorder >= bottomBorder) {
        var center = Math.floor((topBorder + bottomBorder) / 2);
        if (parseInt(sequence[center]) == parseInt(searched)) {
            document.getElementById('binary-output').value = 'Your num: ' + searched + '\nis at: ' + center;
            return;
        } else if (parseInt(sequence[center]) > parseInt(searched)) {
            topBorder = center - 1;
        } else {
            bottomBorder = center + 1;
        }
    }
    document.getElementById('binary-output').value = 'Your num: ' + searched + ' is not in here';
}