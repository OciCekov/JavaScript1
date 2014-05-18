function copy(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;

    var copied = obj.constructor();

    for(var key in obj)
        copied[key] = copy(obj[key]);
    return copied;
}
function showCopy(){
    var obj = {a:10, b:25, c:"why"};
    var copied = copy(obj);

    document.getElementById("output").value = copied;
}