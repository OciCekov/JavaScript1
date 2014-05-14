function maxSequence() {
    var input = document.getElementById('max-sequence-input').value;
    var inputAsArray = input.split(' ');
    var number = 0;
    var repetitions = 1;
    var maxRepetitions = 1;


    for (var i = 1, len = inputAsArray.length; i < len; i += 1) {
        if (inputAsArray[i] === inputAsArray[i - 1]) {
            repetitions += 1;

            if(repetitions > maxRepetitions){
                maxRepetitions = repetitions;
                number = inputAsArray[i];
            }
        }
        else{
            repetitions = 1;
        }
    }
document.getElementById('max-sequence-output').value= 'Number: '+ number+'\nTimes: '+maxRepetitions;
}