function Player(name, health) {
    if(typeof(name)!="string"){
        throw new Error("name must be string");
    }else{
        this.name = name;
    }
    this.health = health
    this.attack = function (opp){
        return opp.health -=10;
    }
}

var attackArry = [];

var player1 = new Player("player1",100);
var player2 = new Player("player2",100); 

function fight (player1, player2){
    if(Math.random()<0.5){
        player1.attack(player1);
        attackArry.push(player1.name);
    }else{
        player2.attack(player2);
        attackArry.push(player2.name);;
    }
}
function whoWin(){
    while (player1.health>0 && player2.health>0){
        fight(player1, player2);
        for(var i=0;i<attackArry.length-2;i++){
            if(attackArry[i]===attackArry[i+1]===attackArry[i+2]){
                attackArry[i].name +=5;
            }
        }
    }
}
    if(player1.health==0){
        return player2.name+" win";
    }else{
        return player1.name+" win";
    }
