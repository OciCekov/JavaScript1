var Human = function (fName, lName, age) {
    return{
        age: age,
        show: function () {
            return fName + ' ' + lName;
        }
    }
};

var herd = [
    new Human("Pesho", "Petrov", 35),
    new Human("Gosho", "Georgiev", 18),
    new Human("Vankata", "Todorov", 23)
];
var maxLive = 120;
var teen;

function getTeen() {
    for(var i =0; i<herd.length;i+=1){
        if(herd[i].age<maxLive){
            maxLive=herd[i].age;
            teen = herd[i];
        }
    }
    return teen;
}
function showTeen(){
    var teen = getTeen();

    document.getElementById('show').value = 'That guy: '+ teen.show();
}
