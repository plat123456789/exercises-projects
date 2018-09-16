function average(arr){
    var a = arr;

    var sum = a.reduce(function(sum1, num){
        return sum1 + num;
    }, 0);

    return sum/a.length;
}
