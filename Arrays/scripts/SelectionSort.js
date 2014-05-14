function selectionSort() {
    var input = document.getElementById('selection-sort-input').value;
    var inputAsArray = input.trim().split(' ');
    var temp, index;

    for (var i = 0, len = inputAsArray.length; i < len - 1; i += 1) {
        index = i;
        for (var j = i + 1; j < len; j += 1) {
            if (inputAsArray[j] < inputAsArray[index]) {
                index = j;
            }
        }
        temp = inputAsArray[index];
        inputAsArray[index] = inputAsArray[i];
        inputAsArray[i] = temp;
    }
    document.getElementById('selection-sort-output').value = inputAsArray;
}