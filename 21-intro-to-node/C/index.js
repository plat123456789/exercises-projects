let random = require("./random")
let charAt = require("./charAt")

function charNum (num){
    let stg="";
    for(let i = 1;i<=num;i++){
        stg += charAt(random());
    }
    return stg;
}

console.log(charNum(10));