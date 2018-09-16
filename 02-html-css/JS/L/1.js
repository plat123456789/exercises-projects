function charCount(stg, char) {
    var stg1 = stg.toString().split('')
    var char1 = char.toString().toLowerCase();
    var count = 0;

    for (var i = 0; i < stg1.length; i++) {
        if (stg1[i] === char1 || stg1[i] === char1.toUpperCase()) {
            count++
        }
    }
    return count;
}