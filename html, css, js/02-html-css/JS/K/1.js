function countLetter(num){

    var charArray = ['o','b','l','i','e','t','a','d','n','m']

    var resultArray = []

    var number = num,
    numArray = [],
    sNumber = number.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
    numArray.push(+sNumber.charAt(i));
    }

    console.log(numArray);

    for(var j = 0; j < numArray.length;j++){
        resultArray.push(charArray[numArray[j]]);
    }

    return resultArray.join('');
}

countLetter(123);