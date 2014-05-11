// Here are the rest of exercises aka 6-9.

// 6. Point in circle
function pointWithinCircle() {
    var xCoord = document.getElementById("point-x").value;
    var yCoord = document.getElementById("point-y").value;
    var circle = 25;

    if (isNaN(xCoord) == true || isNaN(yCoord) == true) {
        document.getElementById("point-result").value = "Impossible point"; // :D
        return;
    }
    var pointCheck = (xCoord * yCoord) + (xCoord * yCoord);

    if (pointCheck < circle) {
        document.getElementById("point-result").value = "point is within the circle";
    }
    else {
        document.getElementById("point-result").value = "point is outside the circle";
    }
}

// 7. Prime number.
function checkPrime() {

    var numToCheck = document.getElementById("prime-input").value;
    var isPrime = true;

    if (isNaN(numToCheck) == true) {
        document.getElementById("prime-output").value = "Has to be a number";
        return;
    }
    if (numToCheck < 0) {
        numToCheck *= -1;
    }
    var divider = Math.sqrt(numToCheck);

    for (var i = 2; i <= divider; i++) {
        if (numToCheck % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime === true) {
        document.getElementById("prime-output").value = numToCheck + " is prime";

    }
    else {
        document.getElementById("prime-output").value = numToCheck + " is NOT prime";
    }
}

// 8.Trapezoid area
function trapezoidArea() {

    var sideA = parseInt(document.getElementById("side-a").value);
    var sideB = parseInt(document.getElementById("side-b").value);
    var trapH = parseInt(document.getElementById("trapezoid-height").value);

    if (isNaN(sideA) == true || isNaN(sideB) == true || isNaN(trapH) == true) {
        document.getElementById("trapezoid-area").value = "We work in numbers";
        return;
    }
    if (sideA < 0 || sideB < 0 || trapH < 0) {
        document.getElementById("trapezoid-area").value = "Positive numbers";
        return;
    }
    document.getElementById("trapezoid-area").value = ((sideA + sideB) / 2) * trapH;
}

// 9.Point in Circle and rectangle
function circleAndRectangle() {
    var x = parseInt(document.getElementById("circle-x").value);
    var y = parseInt(document.getElementById("circle-y").value);

    if (isNaN(x) == true || isNaN(y) == true) {
        document.getElementById("circle-result").value = "Noooooooo!";
        return;
    }

    var radius = 3;
    var centerX = 1;
    var centerY = 1;
    var circle = ((centerX - x) * (centerX - x) + (centerY - y) * (centerY - y)) <= radius * radius;
    var rectangle = ((x < 7 && x > 1 ) && ( y < -1 && y < -3));
    if (circle && rectangle) {
        document.getElementById("circle-result").value = "The point is in the circle and in the rectangle";
    }
    else if (circle == true && rectangle == false) {
        document.getElementById("circle-result").value = "The point is in the circle and out of rectangle";
    }
    else if (circle == false && rectangle == true) {
        document.getElementById("circle-result").value = "The point is out of the circle and in the rectangle";
    }
    else if (!(circle && rectangle )) {
        document.getElementById("circle-result").value = "The point is out of this planet!";
    }
}

