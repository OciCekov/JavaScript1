function findSmallestAndLargestProperties() {


    var userInput = document.getElementById("smallestAndLargest-properties-input").value;
    var getObjectFromInput = new Function('return ' + userInput);
    var userInputAsObject = getObjectFromInput();
    // Yes it may be a "little" hack, but I really liked to see it with user input.

    function propertiesToArray(inputtedObject) {

        var properties = [];

        for (var property in inputtedObject) {

            properties.push(property);
        }
        return properties;
    }

    var propertiesToSort = propertiesToArray(userInputAsObject);

    propertiesToSort.sort();
    var lastProperty = propertiesToSort.length - 1;

    document.getElementById("smallestAndLargest-properties-output").value = "lexicographically first: " + propertiesToSort[0] +
                                                                            "\nlexicographically last: " + propertiesToSort[lastProperty]
}