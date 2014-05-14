function mostFrequent() {
    var input = document.getElementById('frequent-input').value;
    var inputAsArray = input.split(' ');
    var nums = [];
    var max = 0;
    var numKey;

    for (var i = 0, len = inputAsArray.length; i < len; i += 1) {
        if (nums[inputAsArray[i]] !== undefined) {
            nums[inputAsArray[i]]++;
        } else {
            nums[inputAsArray[i]] = 1;
        }

        if (nums[inputAsArray[i]] > max) {
            numKey = inputAsArray[i];
            max = nums[inputAsArray[i]];
        }
    }
    document.getElementById('frequent-output').value =  input!=="" ? numKey + "(" + max + " times)" : "The sequence is empty."
}