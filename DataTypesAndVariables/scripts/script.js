// I accept every idea about how should variables be named, as you see, not great names were created.

var number = 5; // Int wanna be
var float = 5.35; // Float wanna be
var bike = { model: "Cbr", manufacturer: "Honda"}; // Object.... close enough.
var string = 'String thingy'; // String.
var bool = false; // Bool.
var collection = [number, float, bike.manufacturer, bike.model, string, bool]; //Array
var joey = "Joey: 'How you doin'?'"; // The Joey

var typeOfCollection =
    [
            "number = " + typeof number,
            "float = " + typeof float,
            "bike = " + typeof bike,
            "string = " + typeof string,
            "bool = " + typeof bool,
            "collection = " + typeof collection
    ];

var nullVar = null;
var undefinedVar = undefined;
var zeroTypes = ["null= " + typeof nullVar, "undefined= " + typeof undefinedVar];

var allVariables = splitArea(collection, "\n");
var types = splitArea(typeOfCollection, "\n");
var zero = splitArea(zeroTypes, "\n");


function splitArea(areaToSplit, splitter) {

    return areaToSplit.join(splitter);
}

function print(textAreaId, area) {
    document.getElementById(textAreaId).value = area;
}

print("assign-all", allVariables);
print("best-quote", joey);
print("type-off", types);
print("assign-null", zero);

