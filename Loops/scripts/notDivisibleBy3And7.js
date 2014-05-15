function allWithoutDivision() {
    var finalNumber = parseFloat(document.getElementById('without-21-input').value);
    var numbers = takeOneToN(finalNumber);

    numbers = numbers.filter(function (number) {
        return number % 21 !== 0;
    });

    document.getElementById('without-21-output').value = numbers;
}