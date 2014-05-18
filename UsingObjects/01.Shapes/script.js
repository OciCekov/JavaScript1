function getPointCoords(idX, idY) {
    var x = document.getElementById(idX).value;
    var y = document.getElementById(idY).value;

    // Yes I agree, this is probably not the best way to do this.
    if (isNaN(x) || x == null || x == "") {
        document.getElementById("line-calc").value = "Wrong value";
        document.getElementById("line-display").value = "Wrong value";
        document.getElementById("is-triangle").value = "Wrong value";

        return;
    }
    if (isNaN(y) || y == null || y == "") {
        document.getElementById("line-calc").value = "Wrong value";
        document.getElementById("line-display").value = "Wrong value";
        document.getElementById("is-triangle").value = "Wrong value";
        return;
    }
    return [parseFloat(x) , parseFloat(y)];
}

var Point = function createPoint(pointX, pointY) {
    return {
        xCoord: pointX,
        yCoord: pointY,
        stringIt: function () {
            return "(" + this.xCoord + "," + this.yCoord + ")";
        }
    }
};

var Line = function createLine(point1, point2) {
    return{
        firstPoint: point1,
        secondPoint: point2,
        stringIt: function () {
            return "L(P1" + point1.stringIt() + ", P2" + point2.stringIt() + ')';
        },
        calculateLineLength: function () {
            return Math.sqrt((point2.xCoord - point1.xCoord) *
                (point2.xCoord - point1.xCoord) + (point2.yCoord - point1.yCoord) *
                (point2.yCoord - point1.yCoord));
        }
    }
};

function getLine(p1XId, p1YId, p2XId, p2YId) {
    var firstPointCoords = getPointCoords(p1XId, p1YId);
    var secondPointCoords = getPointCoords(p2XId, p2YId);
    var firstPoint = new Point(firstPointCoords[0], firstPointCoords[1]);
    var secondPoint = new Point(secondPointCoords[0], secondPointCoords[1]);

    return  new Line(firstPoint, secondPoint);

}
function checkIfTriangle(firstLine, secondLine, thirdLine) {
    if (firstLine.calculateLineLength() + secondLine.calculateLineLength() > thirdLine.calculateLineLength() &&
        firstLine.calculateLineLength() + thirdLine.calculateLineLength() > secondLine.calculateLineLength() &&
        thirdLine.calculateLineLength() + secondLine.calculateLineLength() > firstLine.calculateLineLength()) {
        return "Yep there is a triangle";
    }
    return "Nope it' doesn't";
}
function displayIfTriangle() {
    var firstLine = getLine('first-line-x1', 'first-line-y1', 'first-line-x2', 'first-line-y2');
    var secondLine = getLine('second-line-x1', 'second-line-y1', 'second-line-x2', 'second-line-y2');
    var thirdLine = getLine('third-line-x1', 'third-line-y1', 'third-line-x2', 'third-line-y2');

    document.getElementById('is-triangle').value = checkIfTriangle(firstLine, secondLine, thirdLine);
}

function seeTheLine() {
    var line = getLine('point-1-x', 'point-1-y', 'point-2-x', 'point-2-y');

    document.getElementById('line-display').value = line.stringIt();
    document.getElementById('line-calc').value = line.calculateLineLength().toFixed(4);
}
seeTheLine();