function convert (num){
    var letters = ['j','a','b','c','d','e','f','g','h','i'];
    var a = parseInt(num, 10);
    var b = a.toString().split('');
    var c =[]

    for(var i=0; i<b.length; i++){
        c.push(letters[parseInt(b[i])]);
    }
    return c.join('');
}