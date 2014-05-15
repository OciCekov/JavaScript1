function biggerThanNeighbours(sequence, element) {
    element = parseInt(element) || 1;
    sequence = sequence.trim().split(' ');
    var isBigger = -1; // Guilty until proven otherwise.

    for (var i = 0; i < sequence.length; i += 1) {  // Yes it bugged me
        sequence[i] = parseInt(sequence[i]);
    }

    if (element > sequence.length - 2 || element < -1) {
        isBigger= 0;
    }

    if (sequence[element] > sequence[element - 1] && sequence[element] > sequence[element + 1]) {
        isBigger = 1;
    }
    return isBigger;
}

function typeIsBigger() {

    var input = readInput('neighbour-sequence', 'neighbour-input');
    var result = biggerThanNeighbours(input[0], input[1]);

    // return document.getElementById('neighbour-output').value = result ? "Yep it's bigger" : "Nope it's not bigger";
    if (result == 1) {
        document.getElementById('neighbour-output').value = "Yep, It's bigger"
    } else if (result == -1) {
        document.getElementById('neighbour-output').value = "Nope, it's not bigger"
    }else{
        document.getElementById('neighbour-output').value = "Why would you do that?"
    }
}