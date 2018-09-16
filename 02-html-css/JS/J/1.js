//the function count the number of digits
function numDigits(x) {
    return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
  }


//this function work as: 
//if the num input <=0 or input is not a number, return error
//if the num larger than 0 and smaller than 1,000,000, I multiply num by 10^(7-num of digits)
//if the num larger the 1,000,000 , I just return the number.
function multiply(num){
    var numDig = numDigits(num);

    if(num<=0 || isNaN(num)===true){
        throw new Error("ERROR")
    }else if(num<1000000){
        return num*Math.pow(10,7-numDig);
    }else{
        return num;
    }
}

multiply(10);