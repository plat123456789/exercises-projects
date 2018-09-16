function Gamble(cash, bet){
    this.cash = cash;
    this.bet = bet;
    this.prob = Math.random();
}

var gamble1 = new Gamble(100,10)
var gamble2 = new Gamble(100,10)

var gambleArry = [gamble1,gamble2];

console.log(gambleArry);

function casino (arry){
    while(gamble.cash)
}