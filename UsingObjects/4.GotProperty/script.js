function checkProperty(obj, property) {
    var gotProperty = 'Nope';
    for (var prop in obj) {
        if (property === prop) {
            gotProperty = 'Yep';
        }
    }
    return gotProperty;
}

var car = {
    maker: 'Honda',
    model: 'Accord',
    year: 1995,
    color: 'Dotted yellow',
    showStats: function () {
        return 'maker: ' + this.maker + '\nmodel: ' + this.model + '\nyear: ' + this.year + '\ncolor: ' + this.color;
    }
};
( function showObject(obj) {
    document.getElementById('showcase').value = car.showStats();
}());

function check() {
    var choice = document.getElementById('user').value;
    var gotIt = checkProperty(car, choice);

    document.getElementById('got-it').value = gotIt;
}