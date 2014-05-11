// here are from 1-5, but it was starting to look really ugly, so... check the other file.

//1.Odd or even
function oddOrEven() {
    var oddEven = document.getElementById("odd-even-input").value;

    if (isNaN(oddEven) == true || oddEven == 0) { // Yes by design it's with only '=='
        document.getElementById("odd-even-output").value = "Hey, not cool!";
    }
    else if (oddEven === 0) {
        document.getElementById("odd-even-output").value = "No clue what is this";
    }
    else if (oddEven % 2 == 0) {
        document.getElementById("odd-even-output").value = "Number is EVEN";
    }
    //probably else statement should look like this    }else{   but it looks, really wrong.
    else {
        document.getElementById("odd-even-output").value = "Number is ODD";
    }
}

// 2.Devise by 7 and 5, at the same time
function divide() {
    var isDivisible = false; // Guilty until proven otherwise.
    var checkedInt = document.getElementById("divisible-input").value;

    if (isNaN(checkedInt) == true || checkedInt == 0) {
        document.getElementById("divisible-output").value = "Well...... NO!";
        return;
    }
    else if (checkedInt % 35 === 0) {
        isDivisible = true;
    }
    if (isDivisible) {
        document.getElementById("divisible-output").value = "Yep, it's divisible.";
    }
    else {
        document.getElementById("divisible-output").value = "Nope, it's not divisible.";
    }
}

// 3. Rectangle area.
function rectangleArea() {
    var width = document.getElementById("rectangle-width").value;
    var height = document.getElementById("rectangle-height").value;

    if (isNaN(width) == true || isNaN(height) == true) {
        document.getElementById("rectangle-area").value = "Just Nope.";
        return;
    }
    if (width == 0) {
        document.getElementById("rectangle-area").value = "That's a pylon";
        return;
    }
    if (height == 0) {
        document.getElementById("rectangle-area").value = "That's a plank";
        return;
    }

    document.getElementById("rectangle-area").value = height * width;
}

// 4. Third digit
function checkThirdDigit() {
    var intForCheck = document.getElementById("third-digit-input").value;

    if (isNaN(intForCheck) == true) {
        document.getElementById("third-digit-output").value = "No, no, no!";
        return;
    }

    intForCheck = Math.floor(intForCheck);
    intForCheck = intForCheck.toString();
    intForCheck = intForCheck.split("").join("");
    var third = intForCheck.charAt(2);

    if (third == 7) {
        document.getElementById("third-digit-output").value = "Yep it is 7";
    }
    else {
        document.getElementById("third-digit-output").value = "Well this " + third + " is not 7";
    }
}

// 5. Third bit
function checkThirdBit() {
    var inputNum = document.getElementById("third-bit-input").value;
    var isZero = false;

    if (isNaN(inputNum) == true) {
        document.getElementById("third-bit-output").value = "Nice try.";
        return;
    }

    if ((inputNum >> 3) & 1 == 1) {
        isZero = true;
    }
    if (isZero == true) {//this is just because it said "write boolean expression"
        document.getElementById("third-bit-output").value = "It's one"
    }
    else {
        document.getElementById("third-bit-output").value = "It's zero"
    }
}


