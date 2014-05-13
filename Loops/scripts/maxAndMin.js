function findMaxAndMin() {

    var sequence = document.getElementById("max-min-input").value;
    sequence = sequence.split(' ');
    var min = Number.MAX_VALUE, max = Number.MIN_VALUE;

    for (var i = 0 , len = sequence.length; i < len; i += 1) {
        // TODO Remember this !
        if (isNaN(sequence[i]) || sequence[i] == null || sequence[i] == "") {
            document.getElementById("max-min-output").value = "This: " + sequence[i]+ "it's kind a not actually a number";
            return;
        }

        sequence[i] = parseFloat(sequence[i]);

        if (sequence[i] > max) {
            max = sequence[i];
        }
        if (sequence[i] < min) {
            min = sequence[i];
        }
    }
    document.getElementById("max-min-output").value = "The boss is: "+max+"\nTiny guy is: " + min;
}