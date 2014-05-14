function allocateArray() {

    var input = document.getElementById("allocate-input").value;
    var inputAsArray = input.split(' ');
    var allocatedArray = '';

    inputAsArray.forEach(function (element) {
        allocatedArray += parseFloat(element) * 5 + ', ';
    });
    document.getElementById("allocate-output").value = allocatedArray;
}