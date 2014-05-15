function findRepetitions(numbers, number) {

    numbers = numbers.split(' ');
   // document.getElementById('appear-output').value = numbers;
    var count = 0;
    for (var i = 0, len = numbers.length; i < len; i += 1) {
        if (numbers[i] == number) {
            count += 1;
        }
    }
    return count;
}

function typeAppearances() {
    var input = readInput('sequence-input', 'number-input');
    var sequence = input[0];
    var number = input[1];
    var result = findRepetitions(sequence,number);
    document.getElementById('appear-output').value = "Your number: "+number+" Is found: "+result+" times";
}