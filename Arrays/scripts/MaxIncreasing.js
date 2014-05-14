function maxIncreasing() {
    var input = document.getElementById('max-increasing-input').value;
    var inputAsArray = input.split(' ');
    var result = [];
    var bestCount = 1;
    var count = 1;

    for (var i = 1, len = inputAsArray.length; i < len; i += 1) {
        if (inputAsArray[i] > inputAsArray[i - 1]) {
            bestCount += 1;
            if (bestCount > count) {
                count = bestCount;
                result.push(inputAsArray[i]);
            }
        }
        else {
            bestCount = 1;
        }
    }
    document.getElementById('max-increasing-output').value = result;

}