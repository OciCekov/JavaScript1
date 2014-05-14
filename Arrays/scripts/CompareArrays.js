function compareArrays() {
    var inputFirst = document.getElementById('compare-first-input').value;
    var inputSecond = document.getElementById('compare-second-input').value;
    var firstAsArray = inputFirst.split(' ');
    var secondAsArray = inputSecond.split(' ');

    function compare(first, second, shorter) {
        var firstIsBigger = 0;
        var secondIsBigger = 0;

        if (shorter < 0) {
            document.getElementById('compare-output').value = "Wrong input";
            return;
        }

        for (var i = 0; i < shorter; i += 1) {
            if (first[i] > second[i]) {
                firstIsBigger += 1;
            }
            else if (first[i] < second[i]) {
                secondIsBigger += 1;
            }
        }

        if (firstIsBigger > secondIsBigger) {
            return "First array";
        }
        else if (firstIsBigger < secondIsBigger) {
            return "Second array";
        }
        else {
            return "They are equal";
        }
    }

    function shorterArray(first, second) {
        if (first.length > second.length) {
            return second.length;
        }
        if (first.length <= second.length) {
            return first.length;
        }
    }

    var shorter = shorterArray(firstAsArray, secondAsArray);
    var result = compare(firstAsArray, secondAsArray, shorter);

    document.getElementById('compare-output').value = result;
    // Disclaimer: Yes this last 3 lines can be typed in to one like this:
    // document.getElementById('compare-output').value = compare(firstAsArray,secondAsArray,shorterArray(firstAsArray,secondAsArray));
    // but hell it's ugly :)
}