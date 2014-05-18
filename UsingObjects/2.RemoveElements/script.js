Array.prototype.remove = function (searched) {
    var arr = [];
    this.forEach(function (currentElement) {
        if (currentElement != searched && currentElement != '') {
            arr.push(currentElement);
        }
    });
    return arr;
};

function removeAll(){
    var sequence = document.getElementById('sequence').value;
    sequence = sequence.trim().split(' ');
    var searched = document.getElementById('element').value;
    var afterCleanup = sequence.remove(searched);

    document.getElementById('output').value = afterCleanup;
}