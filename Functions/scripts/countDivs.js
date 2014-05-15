(function () {
    //There is probably better way of doing this task, but.....  that's wha I came up with
    var repetitions = document.getElementsByTagName("div").length;
    var result = document.getElementById('divs-result').value = "There are " + repetitions + " divs in document.";
})();
