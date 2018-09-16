let myArray = [2,4,6,8,10];

function process (arry){
    return arry.map(function(a){
        return a*2;
    });
}

console.log(process(myArray));