function findIndex(sequence) {
    sequence = sequence.trim().split(' ');
    var i;
    for (i = 0; i < sequence.length; i += 1) {
        sequence[i] = parseInt(sequence[i]);
    }

    for (i = 1; i < sequence.length - 1; i += 1) {
        if (sequence[i] > sequence[i - 1] && sequence[i] > sequence[i + 1]) {
            return i;
        }
    }
    return -1;
}

function typeIndex() {
    var input = readInput('index-of-in');
    var result = findIndex(input);

    if (result == -1) {
        document.getElementById('index-of-out').value = "There is no such number in the sequence";
    } else {
        document.getElementById('index-of-out').value = "Element at: " + result + " Is bigger than it's neighbours";
    }
}