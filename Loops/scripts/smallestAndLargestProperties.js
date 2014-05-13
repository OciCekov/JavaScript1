function findSmallestAndLargestProperties() {


  var  userObject = eval( document.getElementById("smallestAndLargest-properties-input").value);
// Yes I know jsLint/hint will say "eval is evil", but I really liked to see it with user input.
    function propertiesToArray(inputtedObject) {
        var properties = [];
        for (var property in inputtedObject) {

            properties.push(property);
        }
        return properties;
    }

    var propertiesToSort = propertiesToArray(userObject);

    propertiesToSort.sort();
    var lastProperty = propertiesToSort.length - 1;

    document.getElementById("smallestAndLargest-properties-output").value = "lexicographically first: " + propertiesToSort[0] +
        "\nlexicographically last: " + propertiesToSort[lastProperty]
}